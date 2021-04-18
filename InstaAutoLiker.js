let puppeteer = require("puppeteer");


(async function () {
    let browser = await puppeteer.launch({
        headless: false,
        defaultViewport: null,
        args: ["--start-maximized"]
    });
    let allpages = await browser.pages();
    let tab = allpages[0];
    await tab.goto("https://www.instagram.com/");
    await tab.waitForSelector("input[name='password']", { visible: true });
    await tab.type("input[name='username']", "your-username", "name", { delay: 300 })
    await tab.type("input[name='password']", "your-password", { delay: 300 })
    await tab.click(".sqdOP.L3NKy.y3zKF");
    await tab.waitForTimeout(3000);
    await tab.goto("https://www.instagram.com/microsoft/", { delay: 500 });
    await tab.evaluate(()=>{window.scrollTo(0,document.body.scrollHeight);});
    await tab.waitForTimeout(5000);
    await tab.evaluate(()=>{window.scrollTo(0,document.body.scrollHeight);});
    await tab.waitForTimeout(5000);
    await tab.evaluate(()=>{window.scrollTo(0,document.body.scrollHeight);});
    await tab.waitForTimeout(5000);
    await tab.evaluate(()=>{window.scrollTo(0,document.body.scrollHeight);});
    await tab.waitForTimeout(5000);
    await tab.evaluate(()=>{window.scrollTo(document.body.scrollHeight,0);});
    await tab.evaluate(()=>{window.scrollTo(document.body.scrollHeight,0);});
    await tab.evaluate(()=>{window.scrollTo(document.body.scrollHeight,0);});
    await tab.evaluate(()=>{window.scrollTo(document.body.scrollHeight,0);});
    let a = await tab.$$(".eLAPa");
    console.log(a.length);
    // console.log(a);
    await tab.click(".eLAPa", { delay: 1000 });
    for(let i = 0;i<a.length;i++){
    await Sam(tab);
    await likes(tab);
    }
})()




let Sam = async (tab) => {
    await tab.waitForTimeout(3000);
}


let likes = async function (tab) {
    tab.click("svg[aria-label='Like']", { delay: 500 })
        .then(function () { return tab.click("._65Bje.coreSpriteRightPaginationArrow", { delay: 500 }); })
}