import * as React from 'react';
import { IMargins } from '../types';

type IPassedProps = {
  margins: IMargins;
  chartHeight: number;
};

const xAxisLabel = (props: IPassedProps) => {
  return (
    <g className={'x-axis-label'} style={{ transform: `translate(${props.margins.left}px, ${props.margins.top + props.chartHeight}px)` }} >
      <text style={{ fill: '#ccc' }}>X-Axis Label</text>
    </g>
  );
};

export default xAxisLabel;