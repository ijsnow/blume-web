// server/smtp.js
Meteor.startup(function () {

  smtp = {
    // Will not work right now. This email/password is not set up yet.
    username: 'no-reply@BlumeMicroFarms.com',
    password: '<email account password>',
    server:   'smtp.mailgun.org',
    port: 587
  };

  process.env.MAIL_URL = 'smtp://'
    + encodeURIComponent(smtp.username)
    + ':' + encodeURIComponent(smtp.password)
    + '@' + encodeURIComponent(smtp.server)
    + ':' + smtp.port;
});
