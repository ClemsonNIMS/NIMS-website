function filterResources(input) {

  var filter = input.toLowerCase();

  $('.card').each(function(ndx, card){
    var cardResources = $(this).find(".resource-list").text().toLowerCase();
    
    if(cardResources.indexOf(filter) !== -1){
        //Card resource list contains the filter, so show it
        this.style.display = "";
    } else {
        //Card resource list does not contain the filter, so hide it
        this.style.display = "none";
    }
  });
}

//Allows the filter options to be toggled, can be used for any div
function toggle(divId) {
  $('#' + divId).slideToggle("300");
}