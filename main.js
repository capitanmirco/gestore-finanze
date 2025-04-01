const {app, BrowserWindow} = require('electron');
const path = require('path');
const remote = require('@electron/remote/main');
remote.initialize();

// Controllo ambiente (sviluppo o produzione)
const isDev = !app.isPackaged;

// Live reload solo in modalità sviluppo
if (isDev) {
    try {
        require('electron-reload')(__dirname, {
            electron: require(path.join(__dirname, 'node_modules', 'electron')),
            awaitWriteFinish: true
        });
    } catch (err) {
        console.log('Live reload non disponibile:', err);
    }
}

let mainWindow;

function createWindow() {
    mainWindow = new BrowserWindow({
        width: 1200,
        height: 800,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
            enableRemoteModule: true,
        }
    });

    // Caricamento dinamico in base all'ambiente
    const startUrl = isDev
        ? 'http://localhost:4200' // Usa ng serve per Angular
        : `file://${path.join(__dirname, 'dist/finanze-personali/browser/index.html')}`;

    mainWindow.loadURL(startUrl);
    remote.enable(mainWindow.webContents);

    mainWindow.on('closed', () => {
        mainWindow = null;
    });
}

app.on('ready', createWindow);