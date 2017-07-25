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

function buildPreviewCardsResources(){
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