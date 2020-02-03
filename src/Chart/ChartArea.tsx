import * as React from 'react';
import { IMargins } from './types';

type IPassedProps = {
  children: any;
  margins: IMargins;
};

/**
 * Defines a group for the chart area so it can be moved around as a single unit
 * in order to make place for legend, axis labels etc.
 *
 * It also indirectly creates a local coordinate system, so elements can just placed
 * without to have to consider margins that has to be recalculated
 *
 * @param props
 */
const chartArea = (props: IPassedProps) => (
  <g className={'chart-area'} style={{ transform: `translate(${props.margins.left}px, ${props.margins.top}px)` }}>
    {props.children}
  </g>
);

export default chartArea;