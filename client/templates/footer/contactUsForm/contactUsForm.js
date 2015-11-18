Template.contactUsForm.events({
  "submit .js-contactUsForm": function(event, template){
    debugger;
    var email = $('#contactEmailInput').val();
    var name = $('#contactNameInput').val();
    var content = $('#contactContentInput').val();

    if (!email || !content) {
      $('#contactUsError').text('Please include an email for use to get back to you and ensure there is content in the content area.').show();
    } else {
      $('#contactUsError').hide();

      $('#contactUsError').text('This feature is currently under construction. Please personally email us at contact@blumemicrofarms.com. Sorry for any inconveniences!').show();

      // Meteor.call("submitContactUs", {
      //   email: email.trim(),
      //   name: name ? name.trim() : null,
      //   content: content.trim()
      // });

      // if ($('.iWantEmailsCb').is(':checked')) {
      //   Meteor.call("addNewsLetterEmail", email.trim());
      // }

      $('#contactNameInput').val("");
      $('#contactEmailInput').val("");
      $('#contactContentInput').val("");
      //$('#contactUsSuccess').show();
    }

    return false
  }
});
