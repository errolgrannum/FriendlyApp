chrome.app.runtime.onLaunched.addListener(function() {
  chrome.app.window.create('MedlinePlus.html', {
    'bounds': {
      'width': 1270,
      'height': 900,
    }
  });
  });

  

