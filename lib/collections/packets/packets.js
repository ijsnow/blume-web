Packets = new Mongo.Collection("packets", {
  transform: function (packet) {
    switch (globalHelpers.currentPath()) {
      case '/Packets':
        return {
          raw: packet.raw
        };
        break;
      default:

        packet.ventIsOpen = enumManager.map('ventIsOpen', packet.ventIsOpen);
        packet.light = enumManager.map('light', packet.light);
        packet.waterLevel = enumManager.map('waterLevel', packet.waterLevel);

        return packet;
    }
  }
});
