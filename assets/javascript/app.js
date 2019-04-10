$(document).ready(function () {
    console.log(" Javascript is working.");


    $("#portfoliobtn").on('click', function() {
        console.log("Portfolio button has been clicked.")
        //var introBox = $("#introBox");

        $("#introBox").hide();
        document.getElementById("nav").style.display = "block";
        document.getElementById("mainContent").style.display = "block";
    })
});