const wdio = require("webdriverio");

function sleep(time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, time);
  });
}

const option = {
  logLevel: 'silent',
  isW3C: true,
  port: 4723,
  hostname: 'localhost',
  path: '/wd/hub',
  capabilities: {
    automationName: "UiAutomator2",
    platformName: "Android",
    deviceName: "Android Emulator",
    app: "<path/to/app.apks>"
  }
}

const main = async () => {
  try {
    var driver = await wdio.remote(option);
    await sleep(10000);
  } catch( err ) {
    console.log(err);
  } finally {
    await driver.deleteSession();
  }
}
main();
