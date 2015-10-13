Meteor.methods({
  "submitContactUs": function (options) {

    var text = "Name: " + (options.name ? options.name : "Not provided")
            + "\nEmail: " + options.email
            + "\nContent: \n"
            + options.content;

    if (Meteor.isServer) {
      Email.send({
        // Will change to no-reply@bloommicrofarms.com
        from: ["no-reply@BlumeMicroFarms.com"],
        to: ["isaacjsnow@gmail.com", "samuel.louis.milligan@gmail.com"],
        subject: "Message From Blume Site",
        text: text,
      });
    }
  },
  "addNewsLetterEmail": function (email) {
    NewsLetterEmails.insert({
      address: email,
      createdAt: Date.now()
    });
  }
});
