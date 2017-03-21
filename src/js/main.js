//dropdown
$(document).ready(function () {
    $(".dropdown-toggle").dropdown();
});

//scrollspy
$(document).ready(function () {
    removeSection = function (e) {
        $(e).parents("body > div").remove();
        $('body').each(function () {
            $(this).scrollspy('refresh');
        })
    };
    $("body").scrollspy({target: '#nav-bar'});
});