//This is a list of all the facilities that the sytem will gather data from.
var facilities = [

    {name: 'avedore', 
    gasUrl: 'https://system.aldaq.com/api/data/logger/90/point/6765',
    prodTotal: "https://system.aldaq.com/api/data/logger/90/point/9119",
    prodYesterday: null,
    prodToday: null,
    oeeUrl: null},

    {name: 'blabjerg', 
    gasUrl: "https://system.aldaq.com/api/data/logger/150/point/16317", 
    prodTotal: 'https://system.aldaq.com/api/data/logger/150/point/16353',
    prodYesterday: 'https://system.aldaq.com/api/data/logger/150/point/16354',
    prodToday: 'https://system.aldaq.com/api/data/logger/150/point/16355',
    oeeUrl: 'https://system.aldaq.com/api/data/logger/150/point/16348'},

    {name: 'glansager', 
    gasUrl: 'https://system.aldaq.com/api/data/logger/148/point/15917', 
    prodTotal: 'https://system.aldaq.com/api/data/logger/148/point/15953',
    prodYesterday: 'https://system.aldaq.com/api/data/logger/148/point/15954',
    prodToday: 'https://system.aldaq.com/api/data/logger/148/point/15955',
    oeeUrl: 'https://system.aldaq.com/api/data/logger/148/point/15948'},

    {name: 'hashoj', 
    gasUrl: 'https://system.aldaq.com/api/data/logger/154/point/17117', 
    prodTotal: 'https://system.aldaq.com/api/data/logger/154/point/17153',
    prodYesterday: 'https://system.aldaq.com/api/data/logger/154/point/17154',
    prodToday: 'https://system.aldaq.com/api/data/logger/154/point/17155',
    oeeUrl: 'https://system.aldaq.com/api/data/logger/154/point/17148'},

    {name: 'midtfyn', 
    gasUrl: 'https://system.aldaq.com/api/data/logger/139/point/13917', 
    prodTotal: 'https://system.aldaq.com/api/data/logger/139/point/13953',
    prodYesterday: 'https://system.aldaq.com/api/data/logger/139/point/13954',
    prodToday: 'https://system.aldaq.com/api/data/logger/139/point/13955',
    oeeUrl: 'https://system.aldaq.com/api/data/logger/139/point/13948'},

    {name: 'monsson2', 
    gasUrl: 'https://system.aldaq.com/api/data/logger/145/point/15117', 
    prodTotal: 'https://system.aldaq.com/api/data/logger/145/point/15153',
    prodYesterday: 'https://system.aldaq.com/api/data/logger/145/point/15154',
    prodToday: 'https://system.aldaq.com/api/data/logger/145/point/15155',
    oeeUrl: 'https://system.aldaq.com/api/data/logger/145/point/15148'},

    {name: 'monsson', 
    gasUrl: 'https://system.aldaq.com/api/data/logger/142/point/14517', 
    prodTotal: 'https://system.aldaq.com/api/data/logger/142/point/14553',
    prodYesterday: 'https://system.aldaq.com/api/data/logger/142/point/14554',
    prodToday: 'https://system.aldaq.com/api/data/logger/142/point/14555',
    oeeUrl: 'https://system.aldaq.com/api/data/logger/142/point/14548'},

    {name: 'nordfyn', 
    gasUrl: 'https://system.aldaq.com/api/data/logger/140/point/14117', 
    prodTotal: 'https://system.aldaq.com/api/data/logger/140/point/14153',
    prodYesterday: 'https://system.aldaq.com/api/data/logger/140/point/14154',
    prodToday: 'https://system.aldaq.com/api/data/logger/140/point/14155',
    oeeUrl: 'https://system.aldaq.com/api/data/logger/140/point/14148'},

    {name: 'ol', 
    gasUrl: 'https://system.aldaq.com/api/data/logger/152/point/16717', 
    prodTotal: 'https://system.aldaq.com/api/data/logger/152/point/16753',
    prodYesterday: 'https://system.aldaq.com/api/data/logger/152/point/16754',
    prodToday: 'https://system.aldaq.com/api/data/logger/152/point/16755',
    oeeUrl: 'https://system.aldaq.com/api/data/logger/152/point/16748'},

    {name: 'olgod', 
    gasUrl: 'https://system.aldaq.com/api/data/logger/146/point/15317', 
    prodTotal: 'https://system.aldaq.com/api/data/logger/146/point/15353',
    prodYesterday: 'https://system.aldaq.com/api/data/logger/146/point/15354',
    prodToday: 'https://system.aldaq.com/api/data/logger/146/point/15355',
    oeeUrl: 'https://system.aldaq.com/api/data/logger/146/point/15348'},

    {name: 'outrup', 
    gasUrl: 'https://system.aldaq.com/api/data/logger/144/point/14917', 
    prodTotal: 'https://system.aldaq.com/api/data/logger/144/point/14953',
    prodYesterday: 'https://system.aldaq.com/api/data/logger/144/point/14954',
    prodToday: 'https://system.aldaq.com/api/data/logger/144/point/14955',
    oeeUrl: 'https://system.aldaq.com/api/data/logger/144/point/14948'},

    {name: 'ribe', 
    gasUrl: 'https://system.aldaq.com/api/data/logger/141/point/14317', 
    prodTotal: 'https://system.aldaq.com/api/data/logger/141/point/14353',
    prodYesterday: 'https://system.aldaq.com/api/data/logger/141/point/14354',
    prodToday: 'https://system.aldaq.com/api/data/logger/141/point/14355',
    oeeUrl: 'https://system.aldaq.com/api/data/logger/141/point/14348'},

    {name: 'rodekro', 
    gasUrl: 'https://system.aldaq.com/api/data/logger/149/point/16117', 
    prodTotal: 'https://system.aldaq.com/api/data/logger/149/point/16153',
    prodYesterday: 'https://system.aldaq.com/api/data/logger/149/point/16154',
    prodToday: 'https://system.aldaq.com/api/data/logger/149/point/16155',
    oeeUrl: 'https://system.aldaq.com/api/data/logger/149/point/16148'},

    {name: 'sode', 
    gasUrl: 'https://system.aldaq.com/api/data/logger/138/point/13717', 
    prodTotal: 'https://system.aldaq.com/api/data/logger/138/point/13753',
    prodYesterday: 'https://system.aldaq.com/api/data/logger/138/point/13754',
    prodToday: 'https://system.aldaq.com/api/data/logger/138/point/13755',
    oeeUrl: 'https://system.aldaq.com/api/data/logger/138/point/13748'},

    {name: 'storde', 
    gasUrl: 'https://system.aldaq.com/api/data/logger/155/point/17317', 
    prodTotal: 'https://system.aldaq.com/api/data/logger/155/point/17353',
    prodYesterday: 'https://system.aldaq.com/api/data/logger/155/point/17354',
    prodToday: 'https://system.aldaq.com/api/data/logger/155/point/17355',
    oeeUrl: 'https://system.aldaq.com/api/data/logger/147/point/15750'},

    {name: 'stormosen', 
    gasUrl: 'https://system.aldaq.com/api/data/logger/151/point/16517', 
    prodTotal: 'https://system.aldaq.com/api/data/logger/151/point/16553',
    prodYesterday: 'https://system.aldaq.com/api/data/logger/151/point/16554',
    prodToday: 'https://system.aldaq.com/api/data/logger/151/point/16555',
    oeeUrl: 'https://system.aldaq.com/api/data/logger/151/point/16548'},

    {name: 'vesthimmerland', 
    gasUrl: 'https://system.aldaq.com/api/data/logger/153/point/16917', 
    prodTotal: 'https://system.aldaq.com/api/data/logger/153/point/16953',
    prodYesterday: 'https://system.aldaq.com/api/data/logger/153/point/16954',
    prodToday: 'https://system.aldaq.com/api/data/logger/153/point/16955',
    oeeUrl: 'https://system.aldaq.com/api/data/logger/153/point/16948'},

    {name: 'vinkel', 
    gasUrl: 'https://system.aldaq.com/api/data/logger/147/point/15717', 
    prodTotal: 'https://system.aldaq.com/api/data/logger/147/point/15753',
    prodYesterday: 'https://system.aldaq.com/api/data/logger/147/point/15754',
    prodToday: 'https://system.aldaq.com/api/data/logger/147/point/15755',
    oeeUrl: 'https://system.aldaq.com/api/data/logger/147/point/15748'},

    {name: 'vraa', 
    gasUrl: 'https://system.aldaq.com/api/data/logger/143/point/14717', 
    prodTotal: 'https://system.aldaq.com/api/data/logger/143/point/14753',
    prodYesterday: 'https://system.aldaq.com/api/data/logger/143/point/14754',
    prodToday: 'https://system.aldaq.com/api/data/logger/143/point/14755',
    oeeUrl: 'https://system.aldaq.com/api/data/logger/143/point/14748'}
];