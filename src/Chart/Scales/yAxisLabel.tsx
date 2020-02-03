import * as React from 'react';
import { IMargins } from '../types';

type IPassedProps = {
  margins: IMargins;
  chartWidth: number;
};

const xAxisLabel = (props: IPassedProps) => {
  return (
    <g className={'x-axis-label'} style={{ transform: `translate(-50px, ${props.margins.top + props.chartWidth / 2}px)` }} >
      <text style={{ transform: `rotate(-90deg)`, fill: '#ccc' }} >Y-Axis Label</text>
    </g>
  );
}

export default xAxisLabel;