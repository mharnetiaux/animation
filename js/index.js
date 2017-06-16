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
    function close_action(event) {
        if (!$(event.target).is(".top_button,.sub_button_x3, .sub_button_x1, a")) {
            $(".sub_x2").addClass("collapsed-horizontal");
            $(".sub_x3").addClass("collapsed-vertical");
            $(".sub_button_x3").removeClass("arrow_rotate");
            $(".sub_x1_item").removeClass("menu_focus");
        }
    }

    $(document).on('click', function(event) {
        close_action(event);
    }).on('touchstart', function(event) {
        if (!$(event.target).is(".sub_x2_item.has_sub, .sub_x3_item")) {
            close_action(event);
        }
    });
}

function toggle_nav(event) {
    $(".hamburger").on("click", function() {
        $(this).toggleClass("is-active");
        $(this).next(".main_nav").toggleClass("collapsed-horizontal");
    });
}

function back_home() {
    $(".logo").on("click", function() {
        $(".main_nav").addClass("collapsed-horizontal");
        $(".hamburger").removeClass("is-active");
    });
}

function menu_actions() {
    ///come up with a better way
    toggle_nav();
    toggle_sub_menus();
    close_nav();
    back_home();
}

$(document).ready(function() {
    menu_actions();
});