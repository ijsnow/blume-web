Template.graph.helpers ({
  unitId: function () {
    return this.unitId;
  }
});

Template.graph.rendered = function () {
  if ($(window).width() > $(window).height()) {
    $('.ct-chart').addClass('big-chart');
  }

  $(window).on('resize', function () {
    if ($(window).width() > $(window).height()) {
      $('.ct-chart').addClass('big-chart');
    } else {
      $('.ct-chart').removeClass('big-chart');
    }
  });
};

Template.graph.destroyed = function(){
   $('#chart-' + this.data.unitId).data('chart').detach();
};
