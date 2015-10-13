Template.changePasswordForm.events({
	'submit .js-change-pass-form': function(event) {
		var pass = $('#newPasswordInput').val();
		var confirm = $('.confirm-input').val();
		if (pass == confirm) {
			$('#confirm-label').html('Confirm Password');
		  	Accounts.changePassword($('#currentPasswordInput').val(), pass, function (error) {
		  		if (error) {
		  			$('#changePassError').text('Enter Correct Password').show();
		  		} else {
            blazeHelpers.closeCollapse('change-pw');
		  		}
		  	});
		  	$('.confirm-group').removeClass('has-error');
    	} else {
    		$('.confirm-group').addClass('has-error');
    		$('.confirm-label').html('Confirm Password <span class="label label-danger">Passwords Are Not Equal</span>');
    	}
      return false;
	}
});
