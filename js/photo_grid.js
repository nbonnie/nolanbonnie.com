$(".grid_photo").click(function() {
    var src = $(this).prop("src");
    $("#display_photo").prop("src",src)
    $(".grid_photo").css("border","none")
    $(this).css("border","5px solid #F73859")
});
