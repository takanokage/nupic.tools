// This module provides a request handler for HTTP calls from Github web hooks.
var fs = require('fs')
  , _ = require('lodash')
  , log = require('./utils/logger').logger
  , utils = require('./utils/general')
  , contributors = require('./utils/contributors')
  , VALIDATOR_DIR = 'validators'
    // All the validator modules
  , dynamicValidatorModules = []
  , githubHookHandlers = require('./webhooks/github-hook-handlers')
  , EVENT_HEADER_NAME = 'x-github-event'
  ;

/**
 * Given all the RepositoryClient objects, this module initializes all the
 * dynamic validators and returns a request handler function to handle all
 * Github web hook requests, including status updates and pull request
 * notifications.
 * @param clients {RepositoryClient[]} Every RepositoryClient for each repo
 *                                     being monitored.
 * @param config {object} Application configuration.
 */
function initializer(clients, config) {
    dynamicValidatorModules = utils.initializeModulesWithin(VALIDATOR_DIR);

    return function(req, res) {
        var event
          , handler
          , headers = req.headers
          , payload
          , repoSlug
          ;
        event = headers[EVENT_HEADER_NAME];
        if (! event) {
            throw new Error('Cannot process GitHub web hook event that does ' +
                'not contain the ' + EVENT_HEADER_NAME + ' header to ' +
                'identify the event type!');
        }

        payload = JSON.parse(req.body.payload);
        handler = githubHookHandlers[event];
        repoSlug = payload.repository.full_name;

        // If no event handler exists for the hook, just warn and ignore it.
        if (! handler) {
            log.warn('Ignoring GitHub hook event "' + event
                + '" on ' + repoSlug + ' because there is no event handler ' +
                'for this event type.');
            return res.end();
        }

        // If no event client exists for the hook, just warn and ignore it.
        if (! clients[repoSlug]) {
            log.warn('Ignoring GitHub hook event "' + event
                + '" because ' + repoSlug + ' is not being monitored.');
            return res.end();
        }

        log.info('Processing Github web hook "' + event + '" on '
            + repoSlug + '...');
        handler(payload, config, clients[repoSlug], dynamicValidatorModules,
            function(error) {
                if (error) {
                    log.error('Error encountered when processing GitHub web ' +
                        'hook event "' + event + '":');
                    log.error(error.toString());
                    log.debug('HEADERS:');
                    log.debug(headers);
                    log.debug('PAYLOAD:');
                    log.debug(JSON.stringify(payload, null, 2));
                } else {
                    log.info('Completed Github web hook "' + event + '" on '
                        + repoSlug + '...');
                }
                res.end();
            }
        );
    };

}

module.exports = {
    initializer: initializer,
    getValidators: function() {
        return dynamicValidatorModules.map(function(v) {
            return v.name;
        });
    }
};
