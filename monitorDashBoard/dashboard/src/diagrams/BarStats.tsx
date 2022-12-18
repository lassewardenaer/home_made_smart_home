import React from 'react';
import { VictoryBar, VictoryChart, VictoryAxis,
        VictoryTheme } from 'victory';

const data = [
    {name: "Lasse", wins: 1},
    {name: "Priyanshu", wins: 2},
    {name: "Giona", wins: 5},
    {name: "Mihnea", wins: 3},
  ];
  
  class BarStats extends React.Component {
    render() {
      return (
        <VictoryChart
          // adding the material theme provided with Victory
          theme={VictoryTheme.material}
          domainPadding={20}
        >
          <VictoryAxis
            tickValues={data.map((d) => d.name)}
            tickFormat={data.map((d) => d.name)}
          />
          <VictoryAxis
            dependentAxis
                  tickFormat={(x) => {
                      if (x == 1) {
                          return `${x} win`};
                      return (`${x} wins`);
                  }}
          />
          <VictoryBar
            data={data}
            x="name"
            y="wins"
          />
        </VictoryChart>
      )
    }
  }
  
export default BarStats;