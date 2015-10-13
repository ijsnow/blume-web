Accounts.onCreateUser(function(options, user) {
  if (options.profile)
    user.profile = options.profile;

  user.units = [];
  user.createdAt = new Date();

  return user;
});

Accounts.config({
  sendVerificationEmail: true
});
