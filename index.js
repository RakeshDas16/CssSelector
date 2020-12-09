const puppeteer = require('puppeteer');

(async ()=>{

    const newLocal = 'https://prefeitura.pbh.gov.br/saude/licitacao/pregao-eletronico-151-2020';
    let Url=newLocal;

    let browser=await puppeteer.launch();
    let page=await browser.newPage();

    await page.goto(Url,{waitUntil:'networkidle2'});

    let data=await page.evaluate(()=>{
        const newLocal_1 = document.querySelectorAll('span[class="col-sm-6 lbl-licitacao"]')[0].innerText;
        //Get Publication Date
        let Publication_Date=newLocal_1;
       //Get only Publication Date Value use code below
        //let PublicationDate=document.querySelectorAll('span[class="col-sm-6 lbl-licitacao"]')[0].querySelectorAll('font').innerText;
        let Object=document.querySelector('div[class="item"]>div[class="views-field views-field-nothing"]>span[class="field-content"]>p').innerText;
       //Get Publication Date
        let Bidding_Date=document.querySelectorAll('span[class="col-sm-6 lbl-licitacao"]')[3].innerText;
        //Get only Bidding Date Value use code below
        //let Bidding_Date=document.querySelectorAll('span[class="col-sm-6 lbl-licitacao"]')[3].querySelectorAll('font')[3].innerText;
        let ALLLinks=document.querySelectorAll('a');
        return {
            Publication_Date,
            Object,
            Bidding_Date,
           ALLLinks
        }
    });
    console.log(data);
debugger;

    await browser.close();
})();