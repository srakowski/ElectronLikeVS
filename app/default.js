(function () {
     
     var remote = require('remote');                                                       
     var BrowserWindow = remote.require('browser-window');                                        
               
     function init() {          
          
          document.getElementById("min-btn").addEventListener("click", function (e) {
               var window = BrowserWindow.getFocusedWindow();
               window.minimize();          
          });
          
          document.getElementById("max-btn").addEventListener("click", function (e) {
               var window = BrowserWindow.getFocusedWindow();               
               window.maximize();               
          });
          
          document.getElementById("close-btn").addEventListener("click", function (e) {
               var window = BrowserWindow.getFocusedWindow();
               window.close();
          });     
     };          
               
     document.onreadystatechange = function () {
       if (document.readyState == "complete") {
            init();            
       }
     };
     
})();