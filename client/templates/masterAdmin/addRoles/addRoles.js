Template.addRoles.events({
  'submit #addRolesForm': function (event) {
		try {
	    Meteor.call('addRoleToUser', {
				email: $('#emailRoleInput').val().toLowerCase(),
				roles: $('#roleInput').val()
			});
		} catch (e) { }

    return false;
  }
});
