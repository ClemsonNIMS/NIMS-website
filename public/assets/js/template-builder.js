
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