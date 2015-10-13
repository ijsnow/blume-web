Template.registerForm.events({
  'submit #registerAccountForm': function (event) {
  	//event.preventDefault();
    var pass = $('#createNewPasswordInput').val();
    var confirm = $('#confirmPasswordInput').val();

    if (pass == confirm) {
      $('#confirm-label').html('Confirm Password');
        var userId = Accounts.createUser({
              email: $('#createNewEmailInput').val().toLowerCase(),
              password: pass
          }, function (error) {
            if (error) {
              $('#createNewAccountError').text('Email is already used by another account!').show();
            } else {
              if ($('#createAccountContent').get(0)) {
                blazeHelpers.closeCollapse('sign-in');
              }
            }
          }
      );
      $('.confirm-group').removeClass('has-error');
    } else {
      $('.confirm-group').addClass('has-error');
      $('.confirm-label').html('Confirm Password <span class="label label-danger">Passwords Are Not Equal</span>');
    }
    return false;
  },
  'click .js-show-signin': function (event) {
    $('#createAccountContent').get(0).remove();
  	Blaze.render(Blaze.Template.signInForm, $('#blazeCollapse').get(0));
  }
});
