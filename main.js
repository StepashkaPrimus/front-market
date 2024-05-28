const { app, BrowserWindow } = require("electron");
const path = require("path");
const url = require("url");

let browserWindow;

function createBrowserWindow() {
  browserWindow = new BrowserWindow({ width: 1200, height: 800 });

  browserWindow.loadURL(
    url.format({
      pathname: 'localhost:4200',
      protocol: "http:",
      slashes: true
    })
  );

  browserWindow.on("closed", () => {
    browserWindow = null;
  });
}

app.on("ready", createBrowserWindow);

app.on("activate", () => {
  if (browserWindow === null) {
    createBrowserWindow();
  }
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
