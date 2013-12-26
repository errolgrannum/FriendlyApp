
// -------- button fade effect for medline plus
$(document).ready(function(){
  	$('#MedButton').mouseenter(function(){
  		$('#MedButton').fadeTo('fast',.5);	
  	})
  	$('#MedButton').mouseleave(function(){
  		$('#MedButton').fadeTo('fast',1);
  });
});

//-------- medline mousedown function
$(document).ready(function(){
    $('#MedButton').mousedown(function(){
      chrome.app.window.create('MedlinePlus.html', {'bounds': {'width': 1270,'height': 900,} });
    });
    });


// ------- button fade effect for gmail
$(document).ready(function(){
  	$('#GmailButton').mouseenter(function(){
  		$('#GmailButton').fadeTo('fast',.5);	
  	})
  	$('#GmailButton').mouseleave(function(){
  		$('#GmailButton').fadeTo('fast',1);
  });
});

//-------- News mousedown function
$(document).ready(function(){
    $('#GmailButton').mousedown(function(){
      chrome.app.window.create('Gmail.html', {'bounds': {'width': 1270,'height': 900,} });
    });
    });


// ------- button fade effect for News Screen
$(document).ready(function(){
  	$('#NewsButton').mouseenter(function(){
  		$('#NewsButton').fadeTo('fast',.5);	
  	})
  	$('#NewsButton').mouseleave(function(){
  		$('#NewsButton').fadeTo('fast',1);
  });
});

//-------- News mousedown function
$(document).ready(function(){
    $('#NewsButton').mousedown(function(){
      chrome.app.window.create('News.html', {'bounds': {'width': 1270,'height': 900,} });
    });
    });



// ------- button fade effect photo screen
$(document).ready(function(){
  	$('#PhotoButton').mouseenter(function(){
  		$('#PhotoButton').fadeTo('fast',.5);	
  	})
  	$('#PhotoButton').mouseleave(function(){
  		$('#PhotoButton').fadeTo('fast',1);
  });

//-------- Photo mousedown function
$(document).ready(function(){
    $('#PhotoButton').mousedown(function(){
      chrome.app.window.create('/media-gallery/page.html', 
      {bounds: {width:1270, height:900}, id:"MGExp"}, 
      function(app_win) {
        app_win.contentWindow.__MGA__bRestart = false;
      }
    );
    console.log("app launched");
});
});


 // last close necessary!! 	
})