
$(document).ready(() => {

    win = window.width;
    var navClick = 0;

    $("#nav-title").on("click", () => {

        if (navClick % 2 == 0)
            $("#nav-link-wrap").removeClass("collapsed").addClass("uncollapsed");
        
        else $("#nav-link-wrap").removeClass("uncollapsed").addClass("collapsed");
        navClick += 1;

    });

});

