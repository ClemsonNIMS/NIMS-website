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
    $('#' + divId).slideToggle("300");
}
