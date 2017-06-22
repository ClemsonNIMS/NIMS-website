function buildPreviewCards(){
	$.getJSON("/assets/orgData.json", buildPreviewCardsHelper);
}

function buildPreviewCardsHelper(orgs){
	$.get("templates.html", function(templates){
    	var template = $(templates).filter("#org-preview-template").html(); 
    	var content = "<div class='row'>";
        //console.log("start");
    	for(ndx=0; ndx<orgs.length; ndx++){
    		content += Mustache.render(template, orgs[ndx]);
        	}
        parent.document.getElementById("org-previews").innerHTML = (content + '</div>');
    });
}

function buildNavbar(){
    $.get("templates.html", function(templates){
        var template = $(templates).filter("#navbar-template").html();
        parent.document.getElementById("navbar").innerHTML = template;
    });
}
