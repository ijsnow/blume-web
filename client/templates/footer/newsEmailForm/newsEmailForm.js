Template.newsEmailForm.events({
  "submit .js-newsEmailForm": function(event, template){
     var email = $('#emailFormInput').val();

     if (email) {
       Meteor.call("addNewsLetterEmail", email.trim());
       $('#emailFormInput').val();
       $('#newsEmailSuccess').show();
     }
     return false;
  }
});
