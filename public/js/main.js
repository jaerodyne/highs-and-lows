var ctx = document.getElementById("myChart");
var moods = ["Straight Up Rock", "Rock", "Laid-Back Chill", "Groove", "Phasered Out Rock", "Latin-like Dance Rock?", "Raw Rock", "Acoustic Rock Journey", "Needs More Drums", "Lonely Guitar Intro", "Reggae-Influenced Shuffle Rock", "Rock Punk Rock", "Finale"];

var myChart = new Chart(ctx, {
	type: 'line',
	data: {
		labels: ["Track 1: Watch Out Boys", "Track 2: No Regrets", "Track 3: Superstar", "Track 4: There's Nobody Singing", "Track 5: A Secret to Tell", "Track 6: No Chance", "Track 7: It's Over", "Track 8: Take It Away", "Track 9: Sweet Release", "Track 10: You Can't Save Me", "Track 11: Out to Sea", "Track 12: Insomnia", "Track 13: Never Forget"],
		datasets: [{
			backgroundColor: "rgba(36,36,36,0.8)",
			borderColor: [
				'rgba(255,99,132,1)',
			],
			borderWidth: 3,
			data: [150, 104, 102, 95, 162, 106, 120, 114, 172, 114, 138, 108, 145],
			fill: false
		}]
	},
	options: {
		animation: {
      duration: 1,
      onComplete: function () {
        var chartInstance = this.chart,
          ctx = chartInstance.ctx;
		      ctx.font = Chart.helpers.fontString(Chart.defaults.global.defaultFontSize, Chart.defaults.global.defaultFontStyle, Chart.defaults.global.defaultFontFamily, Chart.defaults.global.defaultFontColor);
		      ctx.textAlign = 'center';
		      ctx.textBaseline = 'bottom';

        this.data.datasets.forEach(function (dataset, i) {
          var meta = chartInstance.controller.getDatasetMeta(i);
          meta.data.forEach(function (bar, index) {
            var data = dataset.data[index];                            
            ctx.fillText(data, bar._model.x, bar._model.y - 5);
          });
        });
      }
    },
    hover: {
      animationDuration: 0,
      defaultFontColor: '#000'
    },
		layout: {
			padding: {
				left: 0,
				right: 10,
				top: 0,
				bottom: 15
			}
		},
		legend: {
      display: false
    },
		scales: {
			xAxes: [{
				gridLines: {
				  display:false,
				  drawBorder: false
				},
        ticks: {
        	display: false
        }
			}],
			yAxes: [{
				gridLines: {
					display: false,
					drawBorder: false
				},
				ticks: {
						beginAtZero: false,
						display: false
				}
			}]
		},
    tooltips: {
      backgroundColor: 'rgba(216,237,255,0.8)',
      bodyFontColor: 'rgba(36,36,36,0.8)',
      callbacks: {
		    label: function(tooltipItem, data) {
	        let value = data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index];
	          return ' = ' + value;
	      },
        footer: function(tooltipItems, data) {
				 return 'Mood: ' + moods[tooltipItems[0].index];
      	}
      },
      footerFontColor: 'rgba(36,36,36,0.8)',
      footerFontStyle: 'default',
      titleFontColor: 'rgba(255,99,132,1)',
      titleFontStyle: 'bold'
    }
	}
});