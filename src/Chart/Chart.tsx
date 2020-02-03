import * as React from 'react';
import ChartArea from './ChartArea';
import XAxis from './Scales/XAxis';
import YAxis from './Scales/YAxis';
import Curve from './Curve/Curve';
import { scaleLinear } from 'd3';
import { IData, IMargins } from './types';


type IPassedProps = {
  data: IData;
}

export const Chart: React.FC<IPassedProps> = (props) => {
  const chartHeight = 400;
  const chartWidth = 500;
  const margins: IMargins = {top: 50, left:90, bottom: 70, right: 50};
  const height = chartHeight - margins.top - margins.bottom;
  const width = chartWidth - margins.left - margins.right;

  const xScale = scaleLinear().range([0, width]);
  const yScale = scaleLinear().range([height, 0]);

  return (
    <svg
      id={'PercentileCurves'}
      height={chartHeight + 'px'}
      width={chartWidth + 'px'}
      style={ {border: '1px solid #ddd', marginTop: '3em'} }
    >
      <ChartArea margins={margins}>
        <XAxis
          data={ props.data } 
          xScale={ xScale }
          height={ height }
          margins={ margins }
        />

        <YAxis
          data={ props.data } 
          yScale={ yScale }
          margins={ margins }
          chartHeight={ height }
        />

        <Curve 
          data={ props.data }
          scales={{ x: xScale, y: yScale }}
        />
      </ChartArea>
    </svg>
  );
};