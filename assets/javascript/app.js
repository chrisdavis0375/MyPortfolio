$(document).ready(function () {
    console.log(" Javascript is working.");


    $("#portfoliobtn").on('click', function() {
        console.log("Portfolio button has been clicked.")
        //var introBox = $("#introBox");

        $("#introBox").hide();
        document.getElementById("nav").style.display = "block";
        document.getElementById("mainContent").style.display = "block";
    })

    $("#aboutbtn").on('click', function() {
        console.log("About button clicked.");

        document.getElementById("aboutMeBox").style.display = "block";
        document.getElementById("aboutMeText").style.display = "block";
        $("#contactBox").hide();
        $("#projectBox").hide();
        $("#resumeBox").hide();
    });

    $("#workbtn").on('click', function() {
        console.log("Work button clicked.")

        document.getElementById("projectBox").style.display = "block";
        $("#contactBox").hide();
        $("#aboutMeBox").hide();
        $("#resumeBox").hide();
        $("#aboutMeText").hide();
    });

    $("#contactbtn").on('click', function() {
        console.log("Contact button clicked.")

        document.getElementById("contactBox").style.display = "block";
        $("#aboutMeBox").hide();
        $("#projectBox").hide();
        $("#resumeBox").hide();
        $("#aboutMeText").hide();
    });

    $("#resumebtn").on('click', function() {
        console.log("Resume button clicked.")

        document.getElementById("resumeBox").style.display = "block";
        $("#contactBox").hide();
        $("#projectBox").hide();
        $("#aboutMeBox").hide();
        $("#aboutMeText").hide();
    });
});