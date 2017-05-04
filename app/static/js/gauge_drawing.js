/**
 * Created by zhou0200 on 2/5/17.
 */


			var gauges = [];

	        function createGauge(name, label, min, max)
			{
				var config =
				{
					size: 210,
					label: label,
					min: undefined != min ? min : 1,
					max: undefined != max ? max : 3,
					minorTicks: 5
				}

				var range = config.max - config.min;
				config.yellowZones = [{ from: config.min + range*0.5, to: config.min + range*0.75 }];
				config.redZones = [{ from: config.min + range*0.75, to: config.max }];

				gauges[name] = new Gauge(name + "GaugeContainer", config);
				gauges[name].render();

			}

			function createGauges()
			{
				createGauge("pue", "PUE");
				//createGauge("test", "Test", -50, 50 );
			}

			function updateGauges()
			{
				for (var key in gauges)
				{
					var value = getRandomValue(gauges[key])
					gauges[key].redraw(value);
				}
			}

			function getRandomValue(gauge)
			{
				var overflow = 0; //10;
				return gauge.config.min - overflow + (gauge.config.max - gauge.config.min + overflow*2) *  Math.random();
			}

			function initialize()
			{
				createGauges();
				setInterval(updateGauges, 5000);
			}

