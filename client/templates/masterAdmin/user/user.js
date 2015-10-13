Template.user.helpers({
	'email': function () {
		if (this && this.emails)
    		return this.emails[0].address;
	},
	'userRoles': function () {
		return Roles.getRolesForUser(this);
	},
	'role': function () {
		return this.valueOf();
	}
});
