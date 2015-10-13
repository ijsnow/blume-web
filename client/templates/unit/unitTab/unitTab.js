Template.unitTab.helpers({
  unitData: function () {
    return Collections.units.getOne();
  },
  lastPacket: function () {
    return Collections.packets.getLastPacketForUnit(this.unitId);
  },
  // waterLevelIs: function() {
  //   if (this.waterLevel == 0) {
  //     return 'Low';
  //   } else if (this.waterLevel == 1) {
  //     return 'Medium';
  //   } else {
  //     return 'High';
  //   }
  // },
  dateFormatted: function () {
    return moment(this.createdAt).format('MMM Do, YYYY - h:mm a');
  },
  // ventHelper: function () {
  //   if (this.ventIsOpen == 1)
  //     return 'Open';
  //   else
  //     return 'Closed';
  // },
  // lightHelper: function () {
  //   switch (this.light) {
  //     case 0:
  //       return "Dark";
  //     case 1:
  //       return "Medium";
  //     case 2:
  //       return "Light";
  //   }
  // }
});

Template.unitTab.events({
  "click .settingsToggle": function(event, template){
    $('.settings-wrapper').toggleClass('opened');
  }
});
