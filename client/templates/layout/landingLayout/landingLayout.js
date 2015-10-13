Template.landingLayout.events({
  "click .blazeCollapser": function (event, template) {
    event.preventDefault();

    blazeHelpers.toggleCollapse(event.currentTarget);
    return false;
  },
  'click .closes-nav': function (event, template) {
    if ($('.navbar-collapse').length) {
      $('.navbar-collapse').collapse('toggle');
    }
  }
} );
