const puppeteer = require('puppeteer');

puppeteer.launch({headless: false}).then(async browser => {
  let page = await browser.newPage();
  const reportPath = "http://localhost:3000/test";
  const reportDataKey = "report_data";
  const reportData = {
      test: 123,
      by: "Dan D."
  };
  const loadScript = `
    const path = "${reportPath}";
    const method = "post";

    // The rest of this code assumes you are not using a library.
    // It can be made less wordy if you use one.
    const form = document.createElement("form");
    form.setAttribute("method", method);
    form.setAttribute("action", path);

    var hiddenField = document.createElement("input");
    hiddenField.setAttribute("type", "hidden");
    hiddenField.setAttribute("name", "${reportDataKey}");
    hiddenField.setAttribute("value", '${JSON.stringify(reportData)}');
    form.appendChild(hiddenField);

    document.body.appendChild(form);
    form.submit();
  `;
  await page.evaluate(loadScript);
  await page.waitForNavigation({ waitUntil: "networkidle"});
  await page.screenshot({path: 'screenshot.png'});
  browser.close();
});