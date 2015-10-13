blazeHelpers = {
  closeCollapse: function (form) {
    var close = 'ex-c-' + form;
    var open = 'ex-' + form;

    $('#blazeCollapse').removeClass(open).addClass(close);

    setTimeout(function(){
      $('#blazeCollapse').removeClass(close + ' ex-open').addClass('ex-closed');
      $('#blazeCollapse').data('expanded', false);
      $('#blazeCollapse').empty().html('Loading...');
    }, 500);
  },
  openCollapse: function (form) {
    var open = 'ex-' + form + ' ex-open';

    $('#blazeCollapse').removeClass('ex-closed').addClass(open);

    $('#blazeCollapse').data('expanded', true);
  },
  toggleCollapse: function (trigger) {

    if ( $('#blazeCollapse').data('expanded') ) {
      var form = $('#blazeCollapse').find('form').data('ex-title');
      var triggerForm = $(trigger).data('title');

      if (form !== triggerForm) {
        blazeHelpers.renderForm($(trigger).data('form'));
      } else {
        blazeHelpers.closeCollapse(form);
      }
    } else {

      var form = $(trigger).data('form');
      blazeHelpers.renderForm(form);

      var title = $('#blazeCollapse').find('form').data('ex-title');
      blazeHelpers.openCollapse( title );

      // Only animate to the form if on home.
      // Will probably rethink this later,
      // but for now thats the only page we need to do this on.
      if (globalHelpers.isHome()) {
        var container = $('body, html');
        container.animate({
            scrollTop: $(window).height() * 0.88
        });
      }
    }
  },
  renderForm: function (form) {
    $('#blazeCollapse').empty();
    Blaze.render(Blaze.Template[form], $('#blazeCollapse').get(0));
  }
};
