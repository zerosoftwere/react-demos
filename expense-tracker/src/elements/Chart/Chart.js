import React from 'react';
import Card from '../Card/Card';
import './Chart.css';

import ChartBar from './ChartBar';

const Chart = ({dataPoints}) => {
  const max = Math.max(...dataPoints.map(dataPoint => dataPoint.value));

  return (
    <Card className='chart'>
      {dataPoints.map(dataPoint => <ChartBar key={dataPoint.label} dataPoint={dataPoint} fill={Math.floor(dataPoint.value / max * 100)}/>)}
    </Card>
  );
};

export default Chart;