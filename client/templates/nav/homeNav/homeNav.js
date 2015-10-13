Template.homeNav.events({
  'click .closes-nav': function (event, template) {
    if ($('.navbar-collapse').length) {
      $('.navbar-collapse.in').collapse('toggle');
    }
  },
  "click .navbar-toggle": function (event, template) {
    $('.navbar-collapse').on('shown.bs.collapse', function () {
      if ($('body').scrollTop() < $('.navbar-collapse').outerHeight(true)) {
        $('body, html').animate({
          scrollTop: $('.navbar-collapse').outerHeight(true)
        });
        $('.navbar-collapse').off('shown.bs.collapse');
      }
    });
  }
});
