Meteor.startup(function () {
  // Make me masterAdmin and admin
  if (Meteor.users.find().count() === 0) {
    Roles.createRole('admin');
    Roles.createRole('masterAdmin');

    var user = {
      email:"isaacjsnow@gmail.com",
      password: "password",
      roles:['admin', 'masterAdmin']
    };

    var id = Accounts.createUser({
     email: user.email,
      password: user.password,
      profile: { name: user.name }
    });

    Roles.addUsersToRoles(id, user.roles);
  }



  // Interval for inserting random packets
  // var interval = Meteor.setInterval(function () {
  //   var temp1, temp2, light;
  //   if (moment().isAfter(moment().hours(21)) || moment().isBefore(moment().hours(7))) {
  //     temp1 = _.random(67, 68);
  //     temp2 = _.random(67, 68);
  //     light = 0;
  //   } else if (moment().isAfter(moment().hours(18)) && moment().isBefore(moment().hours(21))) {
  //     temp1 = _.random(70, 71);
  //     temp2 = _.random(70, 71);
  //     light = 1;
  //   } else if (moment().isAfter(moment().hours(7)) && moment().isBefore(moment().hours(11))) {
  //     temp1 = _.random(67, 68);
  //     temp2 = _.random(67, 68);
  //     light = 0;
  //   } else {
  //     temp1 = _.random(72, 73);
  //     temp2 = _.random(72, 73);
  //     light = 2;
  //   }
  //
  //   var m1 = '123456/' + temp1 + '/' + _.random(1, 3) + '/' + _.random(0, 1) + "/" + light;
  //   var m2 = '234567/' + temp2 + '/' + _.random(1, 3) + '/' + _.random(0, 1) + "/" + light;
  //
  //   var messages = [m1, m2];
  //
  //   _.each(messages, function(message) {
  //     parsePacket(message);
  //   });
  // }, 60000);

  var parsePacket = function (message) {
    // separate delimeted string into array
    var messageArray = message.split('/');

    return {
      unitId: Number(messageArray[0]),
      temperature: Number(messageArray[1]),
      waterLevel: Number(messageArray[2]),
      ventIsOpen: Number(messageArray[3]),
      light: Number(messageArray[4]),
      raw: message
    }
  };


  // Pain stakingly hardcode 24 hours of demo packets
  var createDemoPackets = function () {
    var dates = [];

    Packets.remove({});

    for (var i = 0; i < 24; i = i + 4) {
      dates.push(moment().hour(i).minutes(0));
    }

    var temps = [65, 61, 64, 71, 76, 75, 70];
    var waterLevels = [0, 0, 0, 1, 1, 1, 2];
    var vents = [0, 0, 0, 1, 1, 1, 0];
    var light = 0;

    var packets = [];

    dates.forEach(function (e, i) {
      var packet = parsePacket('0/' + temps[i] + '/' + waterLevels[i] + '/' + vents[i] + '/' + light);
      packet.date = e;

      if (Collections.units.unitExists(packet.unitId)) {
        Collections.packets.addPacket(packet);
      } else {
        Collections.units.createUnit(packet.unitId);
        Collections.packets.addPacket(packet);
      }
    });
  };

  createDemoPackets();
} );
