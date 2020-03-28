import React from 'react';
import {Grid, LineChart, XAxis, YAxis} from 'react-native-svg-charts';
import {View} from 'react-native';

class Area extends React.PureComponent {
  render() {
    const data = [
      -150,
      100,
      110,
      110,
      150,
      110,
      200,
      170,
      170,
      115,
      125,
      100,
      115,
      101,
      84,
      110,
      120,
      115,
      125,
      100,
      115,
      100,
      -150,
    ];
    const svgBg = {fill: '#111111'};
    const axesSvg = {fontSize: 10, fill: 'black'};
    const verticalContentInset = {top: 50};
    const verticalContentInsett = {top: 10};
    const xAxisHeight = 10;

    return (
      <View style={{height: 300, padding: 20, flexDirection: 'row'}}>
        <View
          style={{
            flexDirection: 'column',
            alignSelf: 'stretch',
            justifyContent: 'flex-start',
          }}>
          <YAxis
            data={data}
            numberOfTicks={4}
            style={{
              top: 60,
              height: 180,
            }}
            contentInset={verticalContentInsett}
            formatLabel={value => `$${value} K`}
            svg={svgBg}
          />
        </View>
        <View style={{flex: 1, marginLeft: 10}}>
          <LineChart
            style={{flex: 1}}
            data={data}
            svg={{
              stroke: '#F07041',
              fill: '#FD5328',
              fillOpacity: 0.1,
              strokeWidth: 1.5,
            }}
            contentInset={verticalContentInset}>
            <Grid svg={{stroke: null}} />
          </LineChart>
          <XAxis
            style={{marginLeft: 5, height: xAxisHeight, top: -15}}
            data={data}
            formatLabel={value => `${value} 19:10 PM`}
            contentInset={{left: 20, right: 10}}
            numberOfTicks={4}
            svg={axesSvg}
          />
        </View>
      </View>
    );
  }
}

export default Area;
