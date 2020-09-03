$( document ).ready(function() { 

$("#aboutme").click(function() {          
    $("#aboutme-content-overlay").css("visibility","visible").removeClass("zoomOutRight").addClass("zoomInRight");
    $("#portfolio-content-overlay").removeClass("zoomInRight").addClass("zoomOutRight");
    $("#resume-content-overlay").removeClass("zoomInRight").addClass("zoomOutRight");
});

$("#portfolio").click(function() {        
    $("#portfolio-content-overlay").css("visibility","visible").removeClass("zoomOutRight").addClass("zoomInRight");
    $("#aboutme-content-overlay").removeClass("zoomInRight").addClass("zoomOutRight");
    $("#resume-content-overlay").removeClass("zoomInRight").addClass("zoomOutRight");

});

$("#resume").click(function() {        
    $("#resume-content-overlay").css("visibility","visible").removeClass("zoomOutRight").addClass("zoomInRight");
    $("#aboutme-content-overlay").removeClass("zoomInRight").addClass("zoomOutRight");
    $("#portfolio-content-overlay").removeClass("zoomInRight").addClass("zoomOutRight");

});

//setTimeout(makeVisible,2000);

  
  });
  
  // ***Test if jQuery is loading properly***
  window.onload = function() {
      if (window.jQuery) {
          console.log('jQuery is loaded');
      }
  }