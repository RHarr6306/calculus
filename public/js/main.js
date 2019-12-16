
$(document).ready(() => {

    win = window.width;
    var navClick = 0;

    $("#nav-title").on("click", () => {

        if (navClick % 2 == 0)
            $("#nav-link-wrap").addClass("uncollapsed").removeClass("collapsed");
        
        else $("#nav-link-wrap").addClass("collapsed").removeClass("uncollapsed");
        navClick += 1;

    });

    $("#radio>label").click(function() {

        $("#radio>label").css({
            color: '#777777', 
            fontWeight: 'normal'
        });
        $(this).css({
            color: 'black', 
            fontWeight: 'bold'
        });
        
        $("#radio>label").prop('checked', true);
        $(this).prop('checked', true);

    });

    $("#nav-title > .nav-link").click(() => {
        
        if (navClick % 2 == 0) {
            $(".drop-down-icon")
                .addClass("drop-down-icon-active")
                .removeClass("drop-down-icon");
        } else {
            $(".drop-down-icon")
                .removeClass("drop-down-icon-active")
                .addClass("drop-down-icon");
        }
    })

});

