Template.emailsList.helpers({
  emailsList: function () {
    return EmailsColl.find();
  }
});
