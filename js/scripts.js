$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var animalInput = $("input#animal").val();
    var nameInput = $("input#name").val();
    var adjective1Input = $("input#adjective1").val();
    var adjective2Input = $("input#adjective2").val();
    var placeInput = $("input#place").val();
    var verbingInput = $("input#verb-ing").val();
    var adverbInput = $("input#adverb").val();

    $(".animal").text(animalInput);
    $(".name").text(nameInput);
    $(".adjective1").text(adjective1Input);
    $(".adjective2").text(adjective2Input);
    $(".place").text(placeInput);
    $(".verb-ing").text(verbingInput);
    $(".adverb").text(adverbInput);

    $("#story").show();

    event.preventDefault();
  });
});
