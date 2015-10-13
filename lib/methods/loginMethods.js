Meteor.methods({
  "verificationEmail": function (userId) {
    if(Meteor.isServer){
      Accounts.sendVerificationEmail(userId);
    }
  }
});
