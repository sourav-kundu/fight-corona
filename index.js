const { chromium } = require('playwright');
const player = require('play-sound')(opts = {})
let pincodes = require('./pincode.json');

let browser;
let context;
let page;

(async () => {
  browser = await chromium.launch({
    headless: false
  });
  let serialCount = 1;
  context = await browser.newContext();
  page = await context.newPage();
  while(1) {
    console.log(serialCount);
    try {
        for( pin in pincodes) {
            await searchVaccineAvailability(page,pincodes[pin]);
            await sleep(5000);
        }
    } catch (error) {
        continue;
    }
    serialCount++;
  }
  await context.close();
  await browser.close();
})();

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

process.once('SIGINT', async function () {
    await console.log("KILL signal received. Stopping the current execution. Hope you have been able to book your vaccination slot. Stay safe!");
    await context.close();
    await browser.close();
    process.exit(0);
});

async function searchVaccineAvailability(page, pincode) {
    await page.goto('https://www.cowin.gov.in/home');
    await page.click('[placeholder="Enter your PIN"]');
    await page.fill('[placeholder="Enter your PIN"]', pincode);
    await page.click('text=Search');
    await page.waitForLoadState('networkidle');
    await page.click('text=Age 18+');
    await page.waitForLoadState('networkidle');
    
    const booked = await page.$('text=Booked COVISHIELD Age 18+ >> a');

    let covi1 = await page.$('text=1 COVISHIELD Age 18+ >> a');
    let covi2 = await page.$('text=2 COVISHIELD Age 18+ >> a');
    let covi3 = await page.$('text=3 COVISHIELD Age 18+ >> a');
    let covi4 = await page.$('text=4 COVISHIELD Age 18+ >> a');
    let covi5 = await page.$('text=5 COVISHIELD Age 18+ >> a');
    let covi6 = await page.$('text=6 COVISHIELD Age 18+ >> a');
    let covi7 = await page.$('text=7 COVISHIELD Age 18+ >> a');
    let covi8 = await page.$('text=8 COVISHIELD Age 18+ >> a');
    let covi9 = await page.$('text=9 COVISHIELD Age 18+ >> a');
    let covi10 = await page.$('text=11 COVISHIELD Age 18+ >> a');
    let covi11 = await page.$('text=12 COVISHIELD Age 18+ >> a');
    let covi12 = await page.$('text=13 COVISHIELD Age 18+ >> a');
    let covi13 = await page.$('text=14 COVISHIELD Age 18+ >> a');
    let covi14 = await page.$('text=15 COVISHIELD Age 18+ >> a');
    let covi15 = await page.$('text=16 COVISHIELD Age 18+ >> a');
    let covi16 = await page.$('text=17 COVISHIELD Age 18+ >> a');
    let covi17 = await page.$('text=18 COVISHIELD Age 18+ >> a');
    let covi18 = await page.$('text=19 COVISHIELD Age 18+ >> a');
    let covi19 = await page.$('text=20 COVISHIELD Age 18+ >> a');
    let covi20 = await page.$('text=21 COVISHIELD Age 18+ >> a');
    let covi21 = await page.$('text=22 COVISHIELD Age 18+ >> a');
    let covi22 = await page.$('text=23 COVISHIELD Age 18+ >> a');
    let covi23= await page.$('text=24 COVISHIELD Age 18+ >> a');
    let covi24 = await page.$('text=25 COVISHIELD Age 18+ >> a');
    let covi25 = await page.$('text=26 COVISHIELD Age 18+ >> a');
    let covi26 = await page.$('text=27 COVISHIELD Age 18+ >> a');
    let covi27 = await page.$('text=28 COVISHIELD Age 18+ >> a');
    let covi28 = await page.$('text=29 COVISHIELD Age 18+ >> a');
    let covi29 = await page.$('text=30 COVISHIELD Age 18+ >> a');
    let covi30 = await page.$('text=31 COVISHIELD Age 18+ >> a');
    let covi31 = await page.$('text=32 COVISHIELD Age 18+ >> a');
    let covi32 = await page.$('text=33 COVISHIELD Age 18+ >> a');
    let covi33 = await page.$('text=34 COVISHIELD Age 18+ >> a');
    let covi34 = await page.$('text=35 COVISHIELD Age 18+ >> a');
    let covi35 = await page.$('text=36 COVISHIELD Age 18+ >> a');
    let covi36 = await page.$('text=37 COVISHIELD Age 18+ >> a');
    let covi37 = await page.$('text=38 COVISHIELD Age 18+ >> a');
    let covi38 = await page.$('text=39 COVISHIELD Age 18+ >> a');
    let covi39 = await page.$('text=40 COVISHIELD Age 18+ >> a');
    let covi40= await page.$('text=41 COVISHIELD Age 18+ >> a');
    let covi41 = await page.$('text=42 COVISHIELD Age 18+ >> a');
    let covi42 = await page.$('text=43 COVISHIELD Age 18+ >> a');
    let covi43 = await page.$('text=44 COVISHIELD Age 18+ >> a');
    let covi44 = await page.$('text=45 COVISHIELD Age 18+ >> a');
    let covi45 = await page.$('text=46 COVISHIELD Age 18+ >> a');
    let covi46 = await page.$('text=47 COVISHIELD Age 18+ >> a');
    let covi47 = await page.$('text=48 COVISHIELD Age 18+ >> a');
    let covi48 = await page.$('text=49 COVISHIELD Age 18+ >> a');
    let covi49 = await page.$('text=50 COVISHIELD Age 18+ >> a');
    let covi50 = await page.$('text=10 COVISHIELD Age 18+ >> a');

    let cova1 = await page.$('text=1 COVAXIN Age 18+ >> a');
    let cova2 = await page.$('text=2 COVAXIN Age 18+ >> a');
    let cova3 = await page.$('text=3 COVAXIN Age 18+ >> a');
    let cova4 = await page.$('text=4 COVAXIN Age 18+ >> a');
    let cova5 = await page.$('text=5 COVAXIN Age 18+ >> a');
    let cova6 = await page.$('text=6 COVAXIN Age 18+ >> a');
    let cova7 = await page.$('text=7 COVAXIN Age 18+ >> a');
    let cova8 = await page.$('text=8 COVAXIN Age 18+ >> a');
    let cova9 = await page.$('text=9 COVAXIN Age 18+ >> a');
    let cova10 = await page.$('text=11 COVAXIN Age 18+ >> a');
    let cova11 = await page.$('text=12 COVAXIN Age 18+ >> a');
    let cova12 = await page.$('text=13 COVAXIN Age 18+ >> a');
    let cova13 = await page.$('text=14 COVAXIN Age 18+ >> a');
    let cova14 = await page.$('text=15 COVAXIN Age 18+ >> a');
    let cova15 = await page.$('text=16 COVAXIN Age 18+ >> a');
    let cova16 = await page.$('text=17 COVAXIN Age 18+ >> a');
    let cova17 = await page.$('text=18 COVAXIN Age 18+ >> a');
    let cova18 = await page.$('text=19 COVAXIN Age 18+ >> a');
    let cova19 = await page.$('text=20 COVAXIN Age 18+ >> a');
    let cova20 = await page.$('text=21 COVAXIN Age 18+ >> a');
    let cova21 = await page.$('text=22 COVAXIN Age 18+ >> a');
    let cova22 = await page.$('text=23 COVAXIN Age 18+ >> a');
    let cova23= await page.$('text=24 COVAXIN Age 18+ >> a');
    let cova24 = await page.$('text=25 COVAXIN Age 18+ >> a');
    let cova25 = await page.$('text=26 COVAXIN Age 18+ >> a');
    let cova26 = await page.$('text=27 COVAXIN Age 18+ >> a');
    let cova27 = await page.$('text=28 COVAXIN Age 18+ >> a');
    let cova28 = await page.$('text=29 COVAXIN Age 18+ >> a');
    let cova29 = await page.$('text=30 COVAXIN Age 18+ >> a');
    let cova30 = await page.$('text=31 COVAXIN Age 18+ >> a');
    let cova31 = await page.$('text=32 COVAXIN Age 18+ >> a');
    let cova32 = await page.$('text=33 COVAXIN Age 18+ >> a');
    let cova33 = await page.$('text=34 COVAXIN Age 18+ >> a');
    let cova34 = await page.$('text=35 COVAXIN Age 18+ >> a');
    let cova35 = await page.$('text=36 COVAXIN Age 18+ >> a');
    let cova36 = await page.$('text=37 COVAXIN Age 18+ >> a');
    let cova37 = await page.$('text=38 COVAXIN Age 18+ >> a');
    let cova38 = await page.$('text=39 COVAXIN Age 18+ >> a');
    let cova39 = await page.$('text=40 COVAXIN Age 18+ >> a');
    let cova40= await page.$('text=41 COVAXIN Age 18+ >> a');
    let cova41 = await page.$('text=42 COVAXIN Age 18+ >> a');
    let cova42 = await page.$('text=43 COVAXIN Age 18+ >> a');
    let cova43 = await page.$('text=44 COVAXIN Age 18+ >> a');
    let cova44 = await page.$('text=45 COVAXIN Age 18+ >> a');
    let cova45 = await page.$('text=46 COVAXIN Age 18+ >> a');
    let cova46 = await page.$('text=47 COVAXIN Age 18+ >> a');
    let cova47 = await page.$('text=48 COVAXIN Age 18+ >> a');
    let cova48 = await page.$('text=49 COVAXIN Age 18+ >> a');
    let cova49 = await page.$('text=50 COVAXIN Age 18+ >> a');
    let cova50 = await page.$('text=10 COVAXIN Age 18+ >> a');

    if(covi1 || covi2 || covi3 || covi4 || covi5 || covi6 || covi7 || covi8 || covi9 || covi10 || covi11 || covi12 || covi13 || covi14 || covi15 || covi16 || covi17 || covi18 || covi19 || covi20 || covi21 || covi22 || covi23 || covi24 || covi25 || covi26 || covi27 || covi28 || covi29 || covi30 || covi31 || covi32 || covi33 || covi34 || covi35 || covi36 || covi37 || covi38 || covi39 || covi40 || covi41 || covi42 || covi43 || covi44 || covi45 || covi46 || covi47 || covi48 || covi49 || covi50 ) {
        console.log(pincode);
        player.play('foo.mp3', function(err){
            if (err) throw err
        });
    }
    if(cova1 || cova2 || cova3 || cova4 || cova5 || cova6 || cova7 || cova8 || cova9 || cova10 || cova11 || cova12 || cova13 || cova14 || cova15 || cova16 || cova17 || cova18 || cova19 || cova20 || cova21 || cova22 || cova23 || cova24 || cova25 || cova26 || cova27 || cova28 || cova29 || cova30 || cova31 || cova32 || cova33 || cova34 || cova35 || cova36 || cova37 || cova38 || cova39 || cova40 || cova41 || cova42 || cova43 || cova44 || cova45 || cova46 || cova47 || cova48 || cova49 || cova50 ) {
        console.log(pincode);
        player.play('foo.mp3', function(err){
            if (err) throw err
        });
    }
}