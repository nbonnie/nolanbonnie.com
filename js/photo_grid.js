$(".grid_photo").click(function() {
    var src = $(this).prop("src");
   $("#display_photo").prop("src",src)
});