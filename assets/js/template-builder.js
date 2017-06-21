function buildPreviewCards(){
	$.getJSON("orgData.json", buildPreviewCardsHelper);
}

function buildPreviewCardsHelper(orgs){
	$.get("templates.html", function(templates){
		var rowSize = 3;
    	var template = $(templates).filter("#org-preview-template").html();
    	var target = parent.document.getElementById("org-previews");
    	var rowContent = "";
        console.log("start");
    	for(ndx=0; ndx<orgs.length+rowSize; ndx+=rowSize){
            console.log("ndx");
    		rowContent += "<div class='row animatedParent'>";
    		for(col=0; col<rowSize && ndx+col<orgs.length; col++){
                console.log(ndx+col);
				var output = Mustache.render(template, orgs[ndx+col]);
        		rowContent += output;
        	}
        	target.innerHTML += (rowContent + "</div>");
        	rowContent = "";
        }

    });
}