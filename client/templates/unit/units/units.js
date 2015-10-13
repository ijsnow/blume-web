Template.units.rendered = function () {
  $('#units a').click(function (e) {
    e.preventDefault()
    $(this).tab('show')
  });
};

Template.units.helpers({
  unitList: function () {
    return Collections.units.getCursor();
  },
  unitName: function () {
    return this.unitId;
  },
  unitId: function () {
    return this.unitId;
  }
});

Template.units.rendered = function () {
  $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
    //drawGraph($(this).data('id'), null);
    clientMethods.drawGraph($(this).data('id'));
  });
  $("#unit-tabs li:eq(0) a").tab('show');
};
