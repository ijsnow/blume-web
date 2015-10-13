var packetSchema = {};

packetSchema = new SimpleSchema({
  unitId: {
    type: Number,
    label: "Unit Id"
  },
  temperature: {
    type: Number,
    label: "Temperature"
  },
  waterLevel: {
    type: Number,
    label: "Water Level",
  },
  ventIsOpen: {
    type: Number
  },
  light: {
    type: Number
  },
  raw: {
    type: String,
    label: "Raw Packet"
  },
  createdAt: {
    type: Date,
    label: "Packet Created At"
  }
});

Packets.attachSchema(packetSchema);

// Clean up
packetSchema = null;
