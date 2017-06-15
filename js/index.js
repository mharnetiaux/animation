function toggle_sub_menus() {
    $(".sub_button_x1").on("click", function() {
        $(this).parent(".sub_x1_item").toggleClass("menu_focus");
        $(this).next(".sub_x2").toggleClass("collapsed-horizontal");
    });

    $("button.sub_button_x3").on("click", function() {
        $(this).next(".sub_x3").toggleClass("collapsed-vertical");
        $(this).children("span.sub_button_x3").toggleClass("arrow_rotate");
    });
}

function close_nav() {
    $('html').on('click', function() {
        if (!$(event.target).is(".top_button,.sub_button_x3,.sub_button_x1, a")) {
            $(".sub_x2").addClass("collapsed-horizontal");
            $(".sub_x3").addClass("collapsed-vertical");
            $(".sub_button_x3").removeClass("arrow_rotate");
            $(".sub_x1_item").removeClass("menu_focus");
        }
    });
}

function toggle_nav(event) {
    $(".hamburger").on("click", function() {
        $(this).toggleClass("is-active");
        $(this).next(".main_nav").toggleClass("collapsed-horizontal");
    });
}

$(document).ready(function() {
    toggle_nav();
    toggle_sub_menus();
    close_nav();
});