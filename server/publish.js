Meteor.publish('getUnit', function(id) {
  return Units.find({ unitId: id });
});

Meteor.publish('units', function() {
  return Units.find();
});

Meteor.publish('packets', function() {
  var deadline = moment().subtract(24, 'hour')._d;
  return Packets.find({
    createdAt: {
      $gte: deadline
    }
  }, { sort: { createdAt: 1 } });
});

Meteor.publish(null, function (){
  return Meteor.roles.find({});
});

Meteor.publish('allusers', function () {
  return Meteor.users.find({}, {sort: {createdAt: -1}});
});

Meteor.publish('todos', function () {
  return Todos.find({}, {sort: {createdAt: -1}});
});

Meteor.publish("demoUnits", function(){

  var units = Units.find({
      unitId: 0
  }, { sort: { createdAt: 1 } });

  var packets = Packets.find({
    unitId: 0
  }, { sort: { createdAt: 1 } });

  return [units, packets];
});

Meteor.publish('newsLetterEmails', function() {
  return EmailsColl.find();
});
