import React, { Component } from 'react';
import { Line, defaults } from 'react-chartjs-2';

defaults.global.defaultFontFamily ='Permanent Marker';
defaults.global.defaultFontStyle = 'bold';
defaults.global.defaultFontSize = 20;
defaults.global.defaultFontColor = 'rgba(36,36,36,1)';

var moods = ["Straight Up Rock", "Rock", "Laid-Back Chill", "Groove", "Phasered Out Rock", "Latin-like Dance Rock?", "Raw Rock", "Acoustic Rock Journey", "Needs More Drums", "Lonely Guitar Intro", "Reggae-Influenced Shuffle Rock", "Rock Punk Rock", "Finale"];

const initialState = {
  labels: ["Track 1: Watch Out Boys", "Track 2: No Regrets", "Track 3: Superstar", "Track 4: There's Nobody Singing", "Track 5: A Secret to Tell", "Track 6: No Chance", "Track 7: It's Over", "Track 8: Take It Away", "Track 9: Sweet Release", "Track 10: You Can't Save Me", "Track 11: Out to Sea", "Track 12: Insomnia", "Track 13: Never Forget"],
  datasets: [
    {
      backgroundColor: 'rgba(36,36,36,1)',
      borderColor: [
        'rgba(255,99,132,1)',
        'rgba(36,36,36,1)'
      ],
      borderWidth: 3,
      data: [150, 104, 102, 95, 162, 106, 120, 114, 172, 114, 138, 108, 145],
      fill: false,
      pointRadius: 5,
      pointBorderWidth: 2,
      pointHoverBorderColor: 'rgba(36,36,36,0.8)',
      pointHoverRadius: 5
    }
  ]
};

const options = {
  animation: {
    onComplete: function () {
      var chartInstance = this.chart,
        ctx = chartInstance.ctx;
        // ctx.font = helpers.fontString(defaults.global.defaultFontSize, defaults.global.defaultFontStyle, defaults.global.defaultFontFamily, defaults.global.defaultFontColor);
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
    animationDuration: 0
  },
  layout: {
    padding: {
      left: 15,
      right: 25,
      top: 0,
      bottom: 27
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
      scaleLabel: {
        display: true,
        fontSize: '18',
        fontStyle: 'bold',
        labelString: 'Beats Per Minute'
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
  title: {
    display: true,
    fontColor: 'rgba(36,36,36,0.8)',
    fontSize: 24,
    text: 'Hover over a point to see track info. Click to see a detailed view.'
  },
  tooltips: {
    backgroundColor: 'rgba(216,237,255,0.8)',
    bodyFontColor: 'rgba(36,36,36,0.8)',
    callbacks: {
      label: function(tooltipItem, data) {
        //generate unicode for special character ♩
        let musicNote = '\u2669'
        let value = data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index];
          return musicNote + '= ' + value;
      },
      footer: function(tooltipItems, data) {
       return 'Mood: ' + moods[tooltipItems[0].index];
      }
    },
    caretPadding: 10,
    caretSize: 7,
    custom: function(tooltip) {
      if (!tooltip) return;
      // disable displaying the color box;
      tooltip.displayColors = false;
    },
    footerFontColor: 'rgba(36,36,36,0.8)',
    footerFontStyle: 'bold',
    titleFontColor: 'rgba(255,99,132,1)',
    yAlign: 'top'
  }
}

class TempoChart extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
      data: initialState,
      track: null
    }

    this.trackSelected = this.trackSelected.bind(this)
  }

  trackSelected(elem) {
    var trackSelected = 1
    //if valid point on chart is clicked
    if(elem[0]) {
      trackSelected += elem[0]._index
      this.setState({track: trackSelected})
      this.props.getTrack(trackSelected)
    }
  }
 
  render() {
    return (
      <div>
        <h2>Highs and Lows as told by tempo markings</h2>
        <Line
          data={this.state.data}
          width={400} 
          options={options}
          getElementAtEvent={this.trackSelected}
        />
      </div>
    )
  }
}

export default TempoChart;