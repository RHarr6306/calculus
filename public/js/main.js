
$(document).ready(() => {

    $("#nav-link-wrap").addClass("collapsed");

    win = window.width;
    var navClick = 0;

    $("#nav-title").on("click", () => {

        if (navClick % 2 == 0)
            $("#nav-link-wrap").removeClass("collapsed").addClass("uncollapsed");
        
        else $("#nav-link-wrap").removeClass("uncollapsed").addClass("collapsed");
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

});

