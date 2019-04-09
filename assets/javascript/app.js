$(document).ready(function () {
    console.log(" Javascript is working.");


    $("#portfoliobtn").on('click', function() {
        console.log("Portfolio button has been clicked.")
        //var introBox = $("#introBox");

        $("#introBox").hide();
        $("#aboutMeBox").style.display = "show";
    })
});