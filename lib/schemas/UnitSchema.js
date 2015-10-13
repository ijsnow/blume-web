var unitSchema = {};

unitSchema = new SimpleSchema({
  unitId: {
    type: Number,
    label: "Unit Id"
  },
  name: {
    type: String,
    label: "Name"
  },
  description: {
    type: String,
    label: "Description",
    min: 0
  },
  createdAt: {
    type: Date,
    label: "Unit Creation",
  }
});

Units.attachSchema(unitSchema);

// Clean up
unitSchema = null;
