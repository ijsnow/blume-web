clientMethods = {
  "drawGraph": function (unitId) {
    var name = '#chart-' + unitId;

    // Clear data
    $(name).empty();

    var packets = Collections.packets.data.find({ unitId: unitId }).fetch();

    if (!packets.length)
      return;

    var temperatures = _.pluck(packets, 'temperature'); // Y axis
    //temperatures = _.map(temperatures, function(temp){ return temp; });

    var times = _.pluck(packets, 'createdAt'); // datetime objects. X axis

    // Set high and low so that the lines stay inside the grid
    var buffer = 15;
    var low = _.reduce(temperatures, function(memo, temp){ return memo < temp ? memo : temp; }, temperatures[0]) - buffer;
    var high = _.reduce(temperatures, function(memo, temp){ return memo > temp ? memo : temp; }, temperatures[0]) + buffer;

    var data = {
      labels: times,
      series: [
        temperatures
      ]
    };

    var options = {
      fullWidth: true,
      chartPadding: {
        right: 30
      },
      showPoint: false,
      showArea: true,
      high: high,
      low: low,
      axisX: {
        labelInterpolationFnc: function (value, index) {
          // Every 4 hours
          var hours = moment(value).hours() % 4 === 0;
          // On the hour exactly
          var minutes = moment(value).minutes() === 0;

          // var label = moment(value).isBefore(moment().hours(0)) ?
          //             moment(value).format('h:mm a') + ', yesterday' :
          //             moment(value).format('h:mm a');
          var label = moment(value).format('h:mm a');

          return hours && minutes ? label : null;
          //return hours && minutes ? moment(value).minutes(0).format("h:mm a") : null;
          //return index % 10 === 0 ? moment(value).format("h:mm a") : null
        }
      }
    };

    var responsiveOptions = [
      ['max-width: 640px', {
        chartPadding: {
          right: 10
        },
        axisX: {
          labelInterpolationFnc: function (value, index) {
            // Every 4 hours
            var hours = moment(value).hours() % 4 === 0;
            // On the hour exactly
            var minutes = moment(value).minutes() === 0;

            var label = moment(value).format('h:mm');
            return hours && minutes ? label : null;
            //return hours && minutes ? moment(value).minutes(0).format("h:mm a") : null;
            //return index % 10 === 0 ? moment(value).format("h:mm a") : null
          }
        }
      }]
    ];

    var chart = new Chartist.Line(name, data, options, responsiveOptions);

    $(name).data('chart', chart);

    return {
      id: unitId,
      chart: chart
    };
  }
};
