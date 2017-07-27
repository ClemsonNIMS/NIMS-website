function buildPreviewCardsOrgs(){
	$.getJSON("/assets/orgData.json", function(orgs){
      $.get("templates.html", function(templates){
        var template = $(templates).filter("#card-preview-orgs").html(); 
        var $content = $("<div class='row no-gutters'></div>");
        for(ndx=0; ndx<orgs.length; ndx++){
          var $card = $(Mustache.render(template, orgs[ndx]));
          $content.append($card);
        }
        $("#org-previews").append($content);
      });
    });
}

function buildPreviewCardsResources(callback){
  $.getJSON("/assets/orgData.json", function(orgs){
      $.get("templates.html", function(templates){
        var template = $(templates).filter("#card-preview-resources").html(); 
        var $content = $("<div class='row no-gutters'></div>");
        for(ndx=0; ndx<orgs.length; ndx++){
          //Resource page should only include orgs with resources
          if(!orgs[ndx].resources || !orgs[ndx].resources.length) continue;

          var $card = $(Mustache.render(template, orgs[ndx]));
          $content.append($card);
        }
        $("#org-previews").append($content);
        highlightToday();
      });
    });
  
}

function buildNavbar(){
    $.get("templates.html", function(templates){
        var $template = $(templates).filter("#navbar-template").html();
        $("#navbar").append($template);
    });
}

function buildFooter(){
    $.get("templates.html", function(templates){
        var $template = $(templates).filter("#footer-template").html();
        $("#footer").append($template);
    });
}

//Highlights the hours for today in each resource's hours section
var highlightToday = function (){
  var weekday = new Array(7);
    weekday[0] = "sunday";
    weekday[1] = "monday";
    weekday[2] = "tuesday";
    weekday[3] = "wednesday";
    weekday[4] = "thursday";
    weekday[5] = "friday";
    weekday[6] = "saturday";

  var today = weekday[new Date().getDay()];
  $("div[id='" + today + "' i]").addClass("today");
}