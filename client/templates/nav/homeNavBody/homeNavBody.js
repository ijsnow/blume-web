Template.homeNavBody.helpers({
  isHome: function() {
    return Router.current().options.route._path === '/';
  }
} );

Template.homeNavBody.events({
  "click .scroller": function(event, template){
    event.preventDefault();

    // would be event.toElement, but that's only implemented in chrome
    var $target = $($(event.currentTarget).attr('href'));

    // Close navbar-collapse if its open.
    $('.navbar-collapse').removeClass('in');

    $(window).scrollTop($target.offset().top - 80);

    return false;
  },
  "click .contactLink": function (event) {
    event.preventDefault();

    $(window).scrollTop($("html, body").height());
  }
} );
