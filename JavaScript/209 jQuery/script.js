$("button:first").on("click", function() {
    $("h1").fadeOut(1500);
})

$("button").last().on("click", function() {
    $("h1").fadeIn(1500);
})