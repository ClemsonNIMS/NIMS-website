function filterResources(input) {

  var filter = input.toLowerCase();
  //console.log("Filter: " + filter);

  $('.card').each(function(ndx, card){
    var cardResources = $(this).find(".resource-list").text().toLowerCase();
    
    if(cardResources.indexOf(filter) !== -1){
        //Card resource list contains the filter, so show it
        this.style.display = "";
        //console.log("Showing " + $(this).find(".card-title").text());
        //console.log("Filter index: " + cardResources.indexOf(filter));   
    } else {
        //Card resource list does not contain the filter, so hide it
        this.style.display = "none";
        //console.log("Hiding " + $(this).find(".card-title").text());
        //console.log("Filter index: " + cardResources.indexOf(filter));
    }
  });
}

function toggle(divId) {
  console.log("test toggle");
  $('#' + divId).slideToggle("300");
}

// Allows for toggling of fullscreen card and makes extra info visible
$(document).on("click",".expandable", function(){

  if($(this).text().toLowerCase() === "view more"){
      $(this).parents('.align-items-stretch').addClass('col-12').removeClass('col-md-6');
      $(this).text("View Less");
  } else if ($(this).text().toLowerCase() === "view less"){
      $(this).parents('.align-items-stretch').removeClass('col-12').addClass('col-md-6');
      $(this).text("View More");
  }
  
});