Meteor.methods({
  "addRoleToUser": function (options) {
  	var user = Meteor.users.findOne({ "emails.address": options.email });
  	Roles.addUsersToRoles(user, [ options.roles ]);
  },
  "createAdminUser": function (email) {
    var user = {
      email: email,
      password: "password",
      roles:['admin']
    };

    var id = Accounts.createUser({
     email: user.email,
      password: user.password,
      profile: { name: user.name }
    });

    Roles.addUsersToRoles(id, user.roles);
  }
});
