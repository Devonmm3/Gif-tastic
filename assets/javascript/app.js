var topics = ["The White Album", "Hints, Allegations and Things Left Unsaid", ]

function createButton(text) {
    $("#buttonsList").append("<button type='button' class='btn btn-primary buttonList'>" + text + "</button>")
}

//function that moves the gif from the opposite state that it is in (still to animated and vice versa)
function giphySwap() {
    $("body").on("click", "img", function () {
        var currentSource = $(this).attr("src");
        var altSource = $(this).attr("data-alt-src");
        $(this).attr("src", altSource);
        $(this).attr("data-alt-src", currentSource);
        currentSource = $(this).attr("src");
        altSource = $(this).attr("data-alt-src");
    });
};


}