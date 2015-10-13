Template.signInForm.events({
  'submit .js-sign-in-form': function(event) {
  	var email = $('#signInEmailInput').val().toLowerCase();
  	var password = $('#signInPasswordInput').val();

  	Meteor.loginWithPassword(email, password, function (error) {
  		if (error) {
  			$('#loginError').text('Invalid email/password combo').show();
  		} else {
        blazeHelpers.closeCollapse('sign-in');
        Router.go('/');
  		}
  	});

    return false;
  },
  'click .js-create-new-button': function(event) {
  	$('#signInContent').get(0).remove();
  	Blaze.render(Blaze.Template.createAccountForm, $('#blazeCollapse').get(0));
  }
});
