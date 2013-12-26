// Use the runtime event listeners to set a window property indicating whether the
// app was launched normally or as a result of being restarted

chrome.app.runtime.onLaunched.addListener(function(data) {
    chrome.app.window.create('page.html', 
    	{bounds: {width:1270, height:900}, id:"MGExp"}, 
    	function(app_win) {
    		app_win.contentWindow.__MGA__bRestart = false;
    	}
    );
    console.log("app launched");
});

chrome.app.runtime.onRestarted.addListener(function() {
    chrome.app.window.create('page.html', 
    	{bounds: {width:1270, height:900}, id:"MGExp"}, 
    	function(app_win) {
    		app_win.contentWindow.__MGA__bRestart = true;
    	}
    );
    console.log("app restarted");
});


