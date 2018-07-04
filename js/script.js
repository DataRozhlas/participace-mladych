// JS soubory ve složce /styles/ se do výsledného článku zakompilují automaticky

var colors = ['#EA614A', '#20649B', '#008836', '#6B96CA', '#A38456', '#A87A93', '#D19C95'];

var dataID = [
  ["Jsem hrdý Evropan","Jsem hrdý Čech","Svět by byl lepší místo, kdyby všichni byli jako Češi"],
  ["Silně souhlasím",21.1,25.4,3],
  ["Souhlasím",44.8,39.6,13.4],
  ["Ani tak, ani tak",26.1,22.5,37.6],
  ["Nesouhlasím",5.9,9.7,35.1],
  ["Silně nesouhlasím",2.1,2.8,10.9]
];

var akceID = dataID[0];

var legendaID = dataID.map(function(d) {
  return d[0];
}); legendaID.shift();

var silnesouhlasim = dataID[1]; silnesouhlasim.shift();

var souhlasim = dataID[2]; souhlasim.shift();

var anitak = dataID[3]; anitak.shift();

var nesouhlasim = dataID[4]; nesouhlasim.shift();

var silnenesouhlasim = dataID[5]; silnenesouhlasim.shift();

var dataPT = [
  ["Sdílení politického obsahu na sociální síti","Darování peněz na řešení sociálního problému","Podpis petice","Členství v sociální nebo politické skupině na sociální síti","Diskuse o sociálních nebo politických tématech na internetu","Dobrovolničení nebo práce na řešení sociálních problémů","Účast na koncertu k sociálnímu nebo politickému tématu","Bojkot nebo nákup produktů z politických, etických nebo enviromentálních důvodů","Nošení trička nebo odznaku s politickým prohlášením","Účast na internetovém protestu nebo bojkotu","Oslovení politika nebo úředníka, například e-mailem","Účast na demonstraci nebo stávce","Práce pro politickou stranu nebo kandidáta","Darování peněz na podporu politické skupiny nebo orgnaizace","Vytvoření online politického obsahu, například videa, webové stránky nebo blogpostu","Nasprejování nebo vylepení politické zprávy na zeď","Politická akce s fyzickou konfrontací s oponenty nebo policií","Obsazení budovy nebo veřejného prostoru"],
  ["Vůbec",61.7,64.4,65.7,67.3,70.2,75.7,75.8,77.3,89.7,90.3,93.3,93.9,95.6,96.1,96.6,96.7,96.9,98.5],
  ["Výjimečně",15.4,14.7,20.9,14.1,11.4,8.4,12.0,7.3,4.0,5.2,3.8,4.0,2.2,2.1,1.1,1.9,1.9,0.9],
  ["Někdy",14.9,16.6,10.4,12.3,11.3,10.2,9.0,7.8,3.9,2.7,1.8,1.6,1.5,1.2,1.5,1.0,0.8,0.4],
  ["Často",5.7,3.2,1.7,4.7,4.7,3.5,2.4,4.5,1.6,1.1,0.6,0.5,0.5,0.1,0.5,0.2,0.1,0.1],
  ["Velmi často",2.2,1.1,1.3,1.6,2.3,2.1,0.8,3.2,0.9,0.7,0.5,0.0,0.2,0.5,0.4,0.1,0.2,0.1]
];

var akcePT = dataPT[0];

var legendaPT = dataPT.map(function(d) {
  return d[0];
}); legendaPT.shift();

var vubec = dataPT[1]; vubec.shift();

var vyjimecne = dataPT[2]; vyjimecne.shift();

var nekdy = dataPT[3]; nekdy.shift();

var casto = dataPT[4]; casto.shift();

var velmicasto = dataPT[5]; velmicasto.shift();

Highcharts.chart('identita', {
    chart: {
        type: 'bar'
    },
    title: {
        text: 'Identita s češstvím/evropanstvím'
    },
    subtitle: {
        text: 'na vzorku 1345 Čechů od 16 do 26 let'
    },
    xAxis: {
        categories: akceID
    },
    yAxis: {
        title: {
            text: ''
        },
        labels: {
            format: '{value} %'
        },
        max: 100,
        reversedStacks: false
    },
    exporting: {
        enabled: false
    },
    credits: {
        href: 'http://www.catcheyou.eu',
        text: 'Zdroj: CatchEyoU'
    },
    tooltip: {
        shared: true,
        pointFormat: '<span style="color:{series.color}; font-weight: bold;">• {series.name}</span>:<b> {point.y}' + ' %' + '<br/></b>'
    },
    plotOptions: {
        series: {
            stacking: 'stacked'
        }
    },
    series: [{
        name: 'silně souhlasím',
        data: silnesouhlasim,
        color: colors[1]
    }, {
        name: 'souhlasím',
        data: souhlasim,
        color: colors[3]
    }, {
        name: 'ani tak, ani tak',
        data: anitak,
        color: colors[4]
    }, {
        name: 'nesouhlasím',
        data: nesouhlasim,
        color: colors[5]
    }, {
        name: 'silně nesouhlasím',
        data: silnenesouhlasim,
        color: colors[0]
    }]
});

Highcharts.chart('participace', {
    chart: {
        type: 'bar'
    },
    title: {
        text: 'Zapojení do politiky'
    },
    subtitle: {
        text: 'na vzorku 1345 Čechů od 16 do 26 let'
    },
    xAxis: {
        categories: akcePT
    },
    yAxis: {
        title: {
            text: ''
        },
        labels: {
            format: '{value} %'
        },
        reversedStacks: false
    },
    exporting: {
        enabled: false
    },
    credits: {
        href: 'http://www.catcheyou.eu',
        text: 'Zdroj: CatchEyoU'
    },
    tooltip: {
        shared: true,
        pointFormat: '<span style="color:{series.color}; font-weight: bold;">• {series.name}</span>:<b> {point.y}' + ' %' + '<br/></b>'
    },
    plotOptions: {
        series: {
            stacking: 'stacked'
        }
    },
    series: [{
        name: 'velmi často',
        data: velmicasto,
        color: colors[1]
    }, {
        name: 'často',
        data: casto,
        color: colors[3]
    }, {
        name: 'někdy',
        data: nekdy,
        color: colors[4]
    }, {
        name: 'výjimečně',
        data: vyjimecne,
        color: colors[5]
    }, {
        name: 'vůbec',
        data: vubec,
        color: colors[0],
        visible: false
    }]
});