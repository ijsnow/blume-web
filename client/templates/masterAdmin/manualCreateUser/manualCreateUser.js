Template.manualCreateUser.events({
	'submit #manualCreateUserForm': function (event) {
		var user = {
      email: $('#newAdminInput').val() ? $('#newAdminInput').val() : null,
      password: "password",
      roles:['admin']
    };

    var userId = Accounts.createUser({
    	email: user.email,
      password: user.password,
      profile: { name: user.name }
    });

		return false;
	}
});
