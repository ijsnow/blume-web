Template.unitSettings.rendered = function () {
  this.$('.datetimepicker').datetimepicker({
    format: 'LT',
    inline: true
  }).on('dp.change', function (e) {
    var id = $(this).data('id');
    $(id).val(e.date.format('h:mm a'));
  }).each(function (i, e) {
    var id = $(this).data('id');
    var date = id === "#beginShadeInput" ?
      moment().hour(4).minutes(0) :
      moment().hour(20).minutes(30);

    $(this).data("DateTimePicker").date(date);
  } );
  $('.btn-primary').filter(function (i, e) {
    return $(this).data('action');
  }).removeClass('btn-primary').addClass('btn-olive olive');

  this.$('.set-time').focus(function (e) {
    var id = '#' + $(this).attr('id');
    $('.datetimepicker').filter(function (i, e) {
      return $(this).data('id') === id;
    }).parents('.date-wrapper').addClass('opened');

    var container = $('body, html');
    container.animate({
        scrollTop: $(window).scrollTop() + 300
    });
  });

  this.$('.closeDate').on('click', function (e) {
    $(this).parents('.date-wrapper.opened').removeClass('opened');
  });

  // initialize typeahead.js
  Meteor.typeahead($('.typeahead')[0], function () {
    return [
      'Tomatoes',
      'Kale',
      'Spinach',
      'Romaine Lettuce',
      'Bell Peppers',
      'Jalepeños'
    ];
  });
  $('span.twitter-typeahead').css('display', 'block');
};

Template.unitSettings.events({
  'input input': function (event) {
    var check = ($('#unitSettingsForm input').filter(function (i, e) {
      return $(e).val() === "";
    }).length > 0);
    if (check) {
      $('#saveSettings').removeClass('disabled');
    } else {
      $('#saveSettings').addClass('disabled');
    }
  }
});


Template.unitSettings.helpers({
  plantTypes: function () {
    return [
      'Tomatoes',
      'Kale',
      'Spinach',
      'Romaine Lettuce',
      'Bell Peppers',
      'Jalepeños'
    ];
  }
});

Template.unitSettings.plantTypes = function () {
  return [
    'Tomatoes',
    'Kale',
    'Spinach',
    'Romaine Lettuce',
    'Bell Peppers',
    'Jalepeños'
  ];
};
