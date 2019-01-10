$(document).on('click', '.js-read-more', function () {

    let $this = $(this);

    let $thisHideContent = $this.closest('.js-content-description').find('.js-hide-content');

    $thisHideContent.css('display', 'block');

    $this.css('display', 'none');

    return false
});
