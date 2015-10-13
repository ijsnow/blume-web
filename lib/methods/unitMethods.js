Meteor.methods({
  storePacket: function (options) {
    
    Packets.insert({
      unitId: options.unitId,
      temperature: options.temperature,
      waterLevel: options.waterLevel,
      ventIsOpen: options.ventIsOpen,
      light: options.light,
      raw: options.raw,
      createdAt: !options.date ? new Date() : options.date._d
    }, function (error, result) {
      if (error) {
        throw error;
      }
    });

    return true;
  },
  createUnit: function (unitId) {

    Units.insert({
      unitId: unitId,
      name: "Unit " + (Collections.units.getCursor().count() + 1),
      description: 'No description',
      createdAt: new Date()
    }, function (error, result) {
      if (error) {
        throw error;
      }
    });

    return true;
  }
});
