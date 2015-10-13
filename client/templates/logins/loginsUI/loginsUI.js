Template.loginUI.events({
  'click .js-sign-out': function(event) {
    Meteor.logout(function(){
      return true;
    });
  }
});
