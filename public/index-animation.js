$(function () {
    $('.tab-btn').on('click', function () {
        var target = $($(this).data('target'));
        if (!target.is(':visible')) {
            $('.tab-content').hide('slide', {direction: 'left'}, 500);
            target.show('slide', {direction: 'right'}, 500);
        }
    });
});
