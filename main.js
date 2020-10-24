const {app, BrowserWindow} = require('electron')
const path = require ("path");
const process = require('process');

function CrearVentanaPrincipal(){
    let VentanaPrincipal = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences:{
            preload: path.join(__dirname, 'preload.js')
        }
    });

    VentanaPrincipal.loadFile('index.html');

}

app.whenReady().then(CrearVentanaPrincipal);

app.on('window-all-closed', function(){
    if (process.platform === 'darwin'){
        app.quit();
    }
});

app.on('activate', function(){
    if(BrowserWindow.getAllWindows().length === 0){
        CrearVentanaPrincipal();
    }
});