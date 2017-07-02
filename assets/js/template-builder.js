function buildPreviewCards(){
	$.getJSON("/assets/orgData.json", function(orgs){
      $.get("templates.html", function(templates){
        var template = $(templates).filter("#org-preview-template").html(); 
        var $content = $("<div class='card-deck'></div>");
        for(ndx=0; ndx<orgs.length; ndx++){
          var $card = $(Mustache.render(template, orgs[ndx]));
          var $list = $("<ul class='resource-list'>");
          $.each(orgs[ndx].resources, function(index, value){
            $list.append($("<li class='"+value.toLowerCase()+"'>"+value+"</li>"));
          });
          $list.append($("</ul>"));

          $card.find("#resource-card-tab" + orgs[ndx].uuid).append($list);
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