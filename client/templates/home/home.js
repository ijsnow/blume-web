Template.home.helpers({
  whatIsBlume: function () {
    return homeStrings.whatIsBlume;
  },
  blumeForYou: function () {
    return homeStrings.bloomForYou;
  },
  gardener: function() {
    return homeStrings.gardener;
  },
  newbie: function() {
    return homeStrings.newbie;
  },
  scale: function () {
    return homeStrings.scale;
  },
  whatsInside: function () {
    return homeStrings.whatsInside;
  },
  controlIt: function () {
    return homeStrings.controlIt;
  },
  content: function () {
    return this['en'];
  },
  logoTop: function () {
    return $(window).height() / 2.75;
  },
  logoDims: function () {
    var defaultDims = 350,
        dims = defaultDims;

    if ($(window).width() < defaultDims)
      dims = $(window).width() / 2;

    if ($(window).height() < defaultDims)
      dims = $(window).height() / 2;

    return dims;
  }
});

Template.home.events({
  "click .more-info-toggle": function (event, template) {
    var target = $(event.currentTarget).data('target');

    $(event.currentTarget).find('.glyphicon-plus').toggleClass('more-info-rotate');

    $('.ex-' + target).toggleClass('more-info-in');

    if ($(event.currentTarget).find('.info-label').text() === " Show more") {
      $(event.currentTarget).find('.info-label').text(" Show less");
    } else {
      $(event.currentTarget).find('.info-label').text(" Show more");
    }
  }
} );

Template.home.onRendered(function () {
  // Creates sticky nav bar
  // Fixed once nave is scrolled to top
  $(window).scroll(function stickyCallback(e) {
    if( $(this).scrollTop() > $('header').height() ) {
      $(".home-nav").addClass("main-nav-sticky");

      $('#nav-replacer').css( { display: 'block' } );

      $('header').addClass('nav-is-sticky');

    } else {
      $(".home-nav").removeClass("main-nav-sticky");

      $('#nav-replacer').css( { display: 'none' } );

      $('header').removeClass('nav-is-sticky');
    }

    // 'Scroll' the logo at different speed than body
    var scrollTop = $(window).scrollTop();
    var startTop = $(window).height() / 2.75;

    $('#logo').css({
      top: startTop + (scrollTop * 0.4) + 'px'
    });
  } );
} );

Template.home.onDestroyed(function() {
  $(window).off('scroll');
  if ($(window).width() < 400 || $(window).height() < 400) {
    $(window).off('resize');
  }
} );

function getLogoDims() {
  var dims = 400;

  if ($(window).width() < 400)
    dims = $(window).width() / 2;

  if ($(window).height() < 400)
    dims = $(window).height() / 2;

  return dims;
}
