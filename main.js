const electron = require('electron')
//module to control application life.
const app = electron.app
//module to create broswer windon
const BrowserWindow = electron.BrowserWindow

const path = require('path')
const url = require('url')

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow

function createWindow () {
  //create the browser window
  mainWindow = new BrowserWindow({width: 500, height: 750})

  //and load the index.html of the app.
  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file',
    slashes: true
  }))
  // open the dev tools

  mainWindow.webContents.openDevTools()

  //emitted when the window is closed.
  mainWindow.on('closed', function (){
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null
  })
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow)

//Quit when all windows are closed
app.on('window-all-closed', function () {
  if(process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate' , function () {
  if (mainWindow === null) {
    createWindow()
  }
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
