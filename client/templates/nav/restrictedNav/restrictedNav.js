Template.restrictedNav.events({
  "click .restricted-nav-collapse": function(event, template){
    var target = $(event.currentTarget).attr('href');
    $(target).collapse('toggle');
    return false;
  },
  'click .js-sign-out': function(event) {
    Meteor.logout(function(){
      return true;
    });
  }
});
