$(".grid_photo").click(function() {
    var src = $(this).prop("src");
   $("#display_photo").css("background-image","url("+src+")")
});