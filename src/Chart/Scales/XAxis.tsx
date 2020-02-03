import * as React from 'react';
import { axisBottom, select } from 'd3';
import XAxisLabel from './xAxisLabel';
import { IData, IMargins } from '../types';

type IPassedProps = {
  data: IData;
  xScale: any;
  height: number;
  margins: IMargins;
}


class XAxis extends React.Component<IPassedProps> {
  private xAxisGroupRef: any = null;

  private setGroupRef = (element: any): void => {
    this.xAxisGroupRef = element;
  };

  private update = (group: any): void => {
    this.props.xScale.domain([0, Math.trunc(this.props.data.length * 1.2)]);

    const xAxisCall = axisBottom(this.props.xScale);

    this.xAxis.call(xAxisCall);
  };

  private xAxis: any = null;

  private createAxis = (groupRef: any) => {
    this.xAxis = select(groupRef)
      .append('g')
      .attr('class', 'x axis')
      .attr('transform', 'translate(0, ' + Number(this.props.height) + ')');

    const xAxisCall = axisBottom(this.props.xScale);
    this.xAxis.call(xAxisCall);
  };

  public componentDidMount() {
    if (!!this.xAxisGroupRef) {
      this.createAxis(this.xAxisGroupRef);
      this.update(this.xAxisGroupRef);
    }
  }

  public componentDidUpdate() {
    if (!!this.xAxisGroupRef) {
      this.update(this.xAxisGroupRef);
    }
  }

  public render() {
    return (
      <>
        <g ref={this.setGroupRef} className={'x-axis-group'} />
        <XAxisLabel margins={this.props.margins} chartHeight={this.props.height} />
      </>
    );
  }

}

export default XAxis;