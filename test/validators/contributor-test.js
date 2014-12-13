var assert = require('assert'),
    proxyquire = require('proxyquire'),
    contribStub = {},
    githubClientStub = {
        contributorsUrl: 'contribUrl',
        user: 'foo'
    },
    contributor = proxyquire('../../validators/contributor', 
                    {'../utils/contributors': contribStub}),
    mockContributors;

mockContributors = [ { Name: 'Matthew Taylor',
    Github: 'rhyolight',
    Email: 'matt@numenta.org',
    Committer: 1,
    Reviewer: 1 },
  { Name: 'Rahul Agarwal',
    Github: 'rahul1',
    Email: 'ragarwal@numenta.com',
    Committer: 1,
    Reviewer: 0 },
  { Name: 'Scott Purdy',
    Github: 'scottpurdy',
    Email: 'scott@numenta.org',
    Committer: 1,
    Reviewer: 1 },
  { Name: 'Subutai Ahmad',
    Github: 'subutai',
    Email: 'subutai@numenta.org',
    Committer: 1,
    Reviewer: 1 },
  { Name: 'Arlo Breault',
    Github: 'arlolra',
    Email: 'arlolra@gmail.com',
    Committer: 0,
    Reviewer: 0 },
  { Name: 'Austin Marshall',
    Github: 'oxtopus',
    Email: 'oxtopus@gmail.com',
    Committer: 1,
    Reviewer: 1 },
  { Name: 'Ron Marianetti',
    Github: 'rmarianetti',
    Email: 'rmarianetti@groksolutions.com',
    Committer: 1,
    Reviewer: 1 },
  { Name: 'Ian Danforth',
    Github: 'iandanforth',
    Email: 'idanforth@embodiedai.com',
    Committer: 0,
    Reviewer: 0 },
  { Name: 'Ziv Rosen',
    Github: 'zivrosen',
    Email: 'zrosen@groksolutions.com',
    Committer: 1,
    Reviewer: 0 },
  { Name: 'Vitaly Kruglikov',
    Github: 'vitaly-krugl',
    Email: 'vkruglikov@numenta.com',
    Committer: 1,
    Reviewer: 1 },
  { Name: 'Brev Patterson',
    Github: 'brev',
    Email: 'bpatterson@groksolutions.com',
    Committer: 0,
    Reviewer: 0 },
  { Name: 'Stewart Mackenzie',
    Github: 'sjmackenzie',
    Email: 'setori88@gmail.com',
    Committer: 0,
    Reviewer: 0 },
  { Name: 'Matthew O\'Connor',
    Github: 'mattroid',
    Email: 'mattroid@gmail.com',
    Committer: 0,
    Reviewer: 0 },
  { Name: 'Thomas Yu',
    Github: 'tyu-grok',
    Email: 'tyu@groksolutions.com',
    Committer: 1,
    Reviewer: 0 },
  { Name: 'Il Memming Park',
    Github: 'memming',
    Email: 'memming@gmail.com',
    Committer: 0,
    Reviewer: 0 },
  { Name: 'Henry Pan',
    Github: 'hpan1984',
    Email: 'henryjpan@gmail.com',
    Committer: 0,
    Reviewer: 0 },
  { Name: 'Jordan Dea-Mattson',
    Github: 'jordandm',
    Email: 'jdm@dea-mattson.com',
    Committer: 1,
    Reviewer: 0 },
  { Name: 'David Ragazzi',
    Github: 'DavidRagazzi',
    Email: 'david_ragazzi@hotmail.com',
    Committer: 0,
    Reviewer: 0 },
  { Name: 'Peter Hunt',
    Github: 'petehunt',
    Email: 'floydophone@gmail.com',
    Committer: 0,
    Reviewer: 0 },
  { Name: 'Patrick Higgins',
    Github: 'pat-man',
    Email: 'patman@cybermesa.com',
    Committer: 0,
    Reviewer: 0 },
  { Name: 'Erik Blas',
    Github: 'ravaa',
    Email: 'erik.blas@gmail.com',
    Committer: 0,
    Reviewer: 0 },
  { Name: 'Bertie Wheen',
    Github: 'Duta',
    Email: 'wheen.b@gmail.com',
    Committer: 0,
    Reviewer: 0 },
  { Name: 'Joe Block',
    Github: 'unixorn',
    Email: 'jpb@groksolutions.com',
    Committer: 0,
    Reviewer: 0 },
  { Name: 'David Brody',
    Github: 'dbrody',
    Email: 'dbrody@gmail.com',
    Committer: 1,
    Reviewer: 0 },
  { Name: 'Will Perkins',
    Github: 'willperkins',
    Email: 'hello@willperkins.com',
    Committer: 0,
    Reviewer: 0 },
  { Name: 'Marek Otahal',
    Github: 'breznak',
    Email: 'markotahal@gmail.com',
    Committer: 1,
    Reviewer: 0 },
  { Name: 'Christopher Lee Simons',
    Github: 'csimons',
    Email: 'christopherleesimons@gmail.com',
    Committer: 0,
    Reviewer: 0 },
  { Name: 'Kenneth Hammett',
    Github: 'BubbaRich',
    Email: 'rich.hammett@gmail.com',
    Committer: 0,
    Reviewer: 0 },
  { Name: 'Manish Bhattarai',
    Github: 'merolaagi',
    Email: 'merolaagi@gmail.com',
    Committer: 0,
    Reviewer: 0 },
  { Name: 'Alexander Stepanov',
    Github: 'sysmaker',
    Email: 'alexander.a.stepanov@gmail.com',
    Committer: 0,
    Reviewer: 0 },
  { Name: 'Ellery Wulczyn',
    Github: 'ewulczyn',
    Email: 'ewulczyn@groksolutions.com',
    Committer: 0,
    Reviewer: 0 },
  { Name: 'Craig Collins',
    Github: 'KI-VEK',
    Email: 'Craig.m.collins@comcast.net',
    Committer: 0,
    Reviewer: 0 },
  { Name: 'Jared Casner',
    Github: 'jcasner',
    Email: 'jcasner@gmail.com',
    Committer: 0,
    Reviewer: 0 },
  { Name: 'Gary Follett',
    Github: 'garyfollett',
    Email: 'gary@follett.com.au',
    Committer: 0,
    Reviewer: 0 },
  { Name: 'Fergal Byrne',
    Github: 'fergbyrne',
    Email: 'fergal.byrne@examsupport.ie',
    Committer: 0,
    Reviewer: 0 },
  { Name: 'David Petrillo',
    Github: 'dpetrillo740',
    Email: 'david.petrillo@gmail.com',
    Committer: 0,
    Reviewer: 0 },
  { Name: 'Gil Shotan',
    Github: 'gilsho',
    Email: 'gilsho@cs.stanford.edu',
    Committer: 0,
    Reviewer: 0 },
  { Name: 'Rob de Bliek',
    Github: 'rdebliek',
    Email: 'rdebliek@gmail.com',
    Committer: 0,
    Reviewer: 0 },
  { Name: 'Luiz Scheinkman',
    Github: 'lscheinkman',
    Email: 'lscheinkman@groksolutions.com',
    Committer: 0,
    Reviewer: 0 },
  { Name: 'Ari Kamlani',
    Github: 'akamlani',
    Email: 'akamlani@gmail.com',
    Committer: 0,
    Reviewer: 0 },
  { Name: 'Karthikeyan Subbaraj',
    Github: 'karthiks',
    Email: 'karthispeaks@gmail.com',
    Committer: 0,
    Reviewer: 0 },
  { Name: 'Matt Keith',
    Github: 'keithcom',
    Email: 'keith@keithcom.com',
    Committer: 0,
    Reviewer: 0 },
  { Name: 'Hideaki Suzuki',
    Github: 'h2suzuki',
    Email: 'h2suzuki@gmail.com',
    Committer: 0,
    Reviewer: 0 },
  { Name: 'Paulo Reis Rodrigues',
    Github: 'khamael',
    Email: 'paulo@mint-labs.com',
    Committer: 0,
    Reviewer: 0 },
  { Name: 'Mattias Eriksson',
    Github: 'mattiaseriksson',
    Email: 'eriksson.mattias@gmail.com',
    Committer: 0,
    Reviewer: 0 },
  { Name: 'Chetan Surpur',
    Github: 'chetan51',
    Email: 'hetan51@gmail.com',
    Committer: 0,
    Reviewer: 0 },
  { Name: 'Ramesh Ganesan',
    Github: 'info2ram',
    Email: 'info2ram@gmail.com',
    Committer: 0,
    Reviewer: 0 },
  { Name: 'Marc Girardot',
    Github: 'mgirardo',
    Email: 'mgirardo@cisco.com',
    Committer: 0,
    Reviewer: 0 },
  { Name: 'Rakesh Kumar',
    Github: 'gopchandani',
    Email: 'gopchandani@gmail.com',
    Committer: 0,
    Reviewer: 0 },
  { Name: 'Paolo Gavazzi',
    Github: 'pgavazzi',
    Email: 'pgavazzi@softcactus.com',
    Committer: 0,
    Reviewer: 0 },
  { Name: 'Aseem Hegshetye',
    Github: 'aseem-hegshetye',
    Email: 'axh118830@utdallas.edu',
    Committer: 0,
    Reviewer: 0 },
  { Name: 'Carl Friess',
    Github: 'carlfriess',
    Email: 'carl.friess@me.com',
    Committer: 0,
    Reviewer: 0 },
  { Name: 'Papa Niang',
    Github: 'pniang',
    Email: 'Opendatageek@gmail.com',
    Committer: 0,
    Reviewer: 0 },
  { Name: 'Azat Nurmagambetov',
    Github: 'azatnur',
    Email: 'azat_n@yahoo.com',
    Committer: 0,
    Reviewer: 0 },
  { Name: 'Sergey Milanov',
    Github: 'smilanov',
    Email: 's_milanov@yahoo.com',
    Committer: 0,
    Reviewer: 0 },
  { Name: 'Aidan Rocke',
    Github: 'AidanRocke',
    Email: 'aidan.rocke@gmail.com',
    Committer: 0,
    Reviewer: 0 },
  { Name: 'Timothy McNamara',
    Github: 'timClicks',
    Email: 'paperless@timmcnamara.co.nz',
    Committer: 0,
    Reviewer: 0 },
  { Name: 'Zac Kohn',
    Github: 'zackohn',
    Email: 'zackohn@yahoo.com',
    Committer: 0,
    Reviewer: 0 },
  { Name: 'Mark Ellul',
    Github: 'mark-ellul',
    Email: 'mark@iplusd.net',
    Committer: 0,
    Reviewer: 0 },
  { Name: 'Greg Slepak',
    Github: 'taoeffect',
    Email: 'contact@taoeffect.com',
    Committer: 0,
    Reviewer: 0 },
  { Name: 'Max Lapan',
    Github: 'shmuma',
    Email: 'max.lapan@gmail.com',
    Committer: 0,
    Reviewer: 0 },
  { Name: 'Wei Wang',
    Github: 'tskatom',
    Email: 'tskatom@gmail.com',
    Committer: 0,
    Reviewer: 0 },
  { Name: 'Jason Poovey',
    Github: 'sirpoovey',
    Email: 'japoovey@gmail.com',
    Committer: 0,
    Reviewer: 0 },
  { Name: 'Joseph-Anthony Perez',
    Github: 'BlueConstellation',
    Email: 'joe.perez@gmx.de',
    Committer: 0,
    Reviewer: 0 },
  { Name: 'Jordan Miller',
    Github: 'LegitMiller',
    Email: 'jordan.kay@gmail.com',
    Committer: 0,
    Reviewer: 0 },
  { Name: 'Grant Wright',
    Github: 'grant-wright',
    Email: 'grant.wright@yahoo.com',
    Committer: 0,
    Reviewer: 0 },
  { Name: 'Takashi Yamamoto',
    Github: 'TakashiYamamoto',
    Email: 'takashi@caelum.co.jp',
    Committer: 0,
    Reviewer: 0 },
  { Name: 'Alexander Powell',
    Github: 'alexaltair',
    Email: 'alexanderaltair@gmail.com',
    Committer: 0,
    Reviewer: 0 },
  { Name: 'Timothy Farley',
    Github: 'trfarley',
    Email: 't.farley@loma.k12.ca.us',
    Committer: 0,
    Reviewer: 0 },
  { Name: 'Jacques Ludik',
    Github: 'jludik',
    Email: 'jludik@gmail.com',
    Committer: 0,
    Reviewer: 0 },
  { Name: 'Thomas Macrina',
    Github: 'macrintr',
    Email: 'thomas.macrina@gmail.com',
    Committer: 0,
    Reviewer: 0 },
  { Name: 'Dominik Lach',
    Github: 'asele',
    Email: 'pogromcaowiec@student.uksw.edu.pl',
    Committer: 0,
    Reviewer: 0 },
  { Name: 'Valter Heger',
    Github: 'heger-valter',
    Email: 'heger.valter@gmail.com',
    Committer: 0,
    Reviewer: 0 },
  { Name: 'Jeffrey Thompson',
    Github: 'jkthompson',
    Email: 'jeffreykeatingthompson@gmail.com',
    Committer: 0,
    Reviewer: 0 },
  { Name: 'Brad Bowman',
    Github: 'bowman',
    Email: 'brad.bowman@gmail.com',
    Committer: 0,
    Reviewer: 0 } 
];

contribStub.getAll = function(url, cb) {
    assert.equal(url, 'contribUrl', 'contributors.getAll sent bad url');
    cb(null, mockContributors);
};

describe('contributor validator', function() {
    it('has a proper "name" property', function() {
        assert.equal(contributor.name, 'Contributor Validator', 'Wrong commit validator name');
    });
    it('returns success state when user exists', function(done) {
        contributor.validate('sha', 'rhyolight', githubClientStub, function(err, status) {
            assert.ifError(err, 'error thrown during validation');
            assert(status.state, 'no status state returned');
            assert.equal(status.state, 'success', 'wrong status state');
            done();
        });
    });
    it('returns failure status when user does not exist', function(done) {
        contributor.validate('sha', 'urgurthemaster', githubClientStub, function(err, status) {
            assert.ifError(err, 'error thrown during validation');
            assert(status.state, 'no status state returned');
            assert.equal(status.state, 'failure', 'wrong status state');
            assert.equal(status.description, 'urgurthemaster must sign the Contributor License');
            assert.equal(status.target_url, 'http://numenta.org/licenses/cl/');
            done();
        });
    });
});
