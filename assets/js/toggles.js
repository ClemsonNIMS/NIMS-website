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

// Allows for toggling of fullscreen card and makes extra info visible
$(document).on("click",".expandable", function(){

  if($(this).text().toLowerCase() === "view more"){
      $(this).parents('.align-items-stretch').removeClass('col-md-6');
      $(this).parents('.align-items-stretch').find('#list').addClass('col-md-6');
      $(this).parents('.align-items-stretch').find('[role=infoToggle]').removeClass('hidden-xs-up');
      $(this).text("View Less");
  } else if ($(this).text().toLowerCase() === "view less"){
      $(this).parents('.align-items-stretch').addClass('col-md-6');
      $(this).parents('.align-items-stretch').find('#list').removeClass('col-md-6');
      $(this).parents('.align-items-stretch').find('[role=infoToggle]').addClass('hidden-xs-up');
      $(this).text("View More");
  }
});