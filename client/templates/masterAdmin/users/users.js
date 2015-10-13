Template.users.helpers({
	'allusers': function () {
		return Meteor.users.find();
	}
});
