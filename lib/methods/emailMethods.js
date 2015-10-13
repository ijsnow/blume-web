Meteor.methods({
  "sendEmail": function (options) {
    // Let other method calls from the same client start running,
    // without waiting for the email sending to complete.
    this.unblock();

    Email.send({
      to: options.to,
      from: options.from,
      subject: options.subject,
      text: options.text
    });
  },
  "sendEmailVerification": function (userId) {
    Accounts.sendVerificationEmail(userId);
  }
});
