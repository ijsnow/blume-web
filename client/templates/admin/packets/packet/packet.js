Template.packet.helpers({
  dateFormatted: function () {
    return moment(this.createdAt).format('MMM Do, YYYY - h:mm a');
  }
});
