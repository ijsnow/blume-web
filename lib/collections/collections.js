// Each collection file is in a sub folder so it gets loaded first.
// They need to exist for createCollections() to work.

Collections = createCollections();
Object.freeze(Collections);

function createCollections() {
  var packets = {
    data: Packets,
    getCursor: function () {
      return Packets.find();
    },
    addPacket: function (options) {
      return Meteor.call('storePacket', options);
    },
    getLastPacketForUnit: function (id) {
      return _.last(Packets.find({ unitId: id }, {sort: {createdAt: -1}}).fetch());
    }
  };
  Object.freeze(packets);

  var units = {
    data: Units,
    getCursor: function () {
      return Units.find();
    },
    getData: function () {
      return Units.data;
    },
    getOne: function () {
      return Units.findOne();
    },
    getUnit: function (id) {
      return Units.findOne({ unitId: id });
    },
    getByMDBId: function (id) {
      return Units.findOne({ _id: id });
    },
    addPacket: function (options) {
      return Meteor.call('storePacket', options);
    },
    createUnit: function (id) {
      return Meteor.call('createUnit', id);
    },
    unitExists: function (id) {
      // if count is 0: false, otherwise: true
      return (Units.find({ unitId: id }).count() === 0) ? false : true;
    },
    getLastPacketForUnit: function (id) {
      return _.last(Units.findOne({ unitId: id }).packets);
    },
    getPackets: function (id) {
      return Units.findOne({ unitId: id }).packets;
    }
  };
  Object.freeze(units);

  return {
    units: units,
    packets: packets
  };
}
