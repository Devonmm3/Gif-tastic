var topics = ["The White Album", "Hints, Allegations and Things Left Unsaid", ]

function createButton(text) {
    $("#buttonsList").append("<button type='button' class='btn btn-primary buttonList'>" + text + "</button>")
}

//function that shows the keywords from array in the buttons

function wordToButton (){
    for (i=0; i<topics.length; i++){
        createButton(topics[i]);
    }
}

//function that moves the gif from the opposite state that it is in (still to animated and vice versa)
$("body").on("click", "img", function () {
var state = $(this).attr("data-state");

if (state === "still") {
    $(this).attr("src", $(this.attr("data-animate"));
    $(this).attr("data-state", "animate");
} else {
    $(this).attr("src", $(this).attr("data-still"));
    $(this).attr("data-state", "still");
}
})




