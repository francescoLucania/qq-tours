$(document).on('click', '.js-read-more', function () {

    let $this = $(this);

    let $thisHideContent = $this.closest('.js-hotel-description').find('.js-hide-content');

    $thisHideContent.css('display', 'block');

    return false
});
