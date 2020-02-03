import * as React from 'react';
import * as d3 from 'd3';

import { IData } from '../types';

type IPassedProps = {
  data: IData;
  scales: {
    x: any;
    y: any;
  }
};

class Curve extends React.Component<IPassedProps> {
  private groupRef = null;
  private curve: any = null;

  private setGroupRef = (element: any) => {
    this.groupRef = element;
  };

  private generateCurve = (scale: any) => {
    return d3.line<number>()
      .curve(d3.curveMonotoneX)
      .x((d: number, i: number) => scale.x(i))
      .y((d: number) => scale.y(d));
  };

  private createPercentileCurve = (scales: any, data: IData) => {
    const curveGenerator = this.generateCurve(scales);
    
    this.curve = d3.select(this.groupRef)
      .attr('class', 'curve_group')
      .append('path')
        .attr('class', 'curve')
        .attr('stroke', 'deeppink')
        .attr('stroke-width', '2px')
        .attr('fill', 'none')
        .attr('d', () => curveGenerator(data));
  };

  private updatePercentileCurve = (curve: any, scales: any, data: IData) => {
    const curveGenerator = this.generateCurve(scales);
    curve.attr('d', () => curveGenerator(data));
  };

  public componentDidMount() {
    if (!!this.groupRef) {
      this.createPercentileCurve(this.props.scales, this.props.data);
      this.updatePercentileCurve(this.curve, this.props.scales, this.props.data);
    }
  }

  public componentDidUpdate() {
    if (!!this.groupRef) {
      this.updatePercentileCurve(this.curve, this.props.scales, this.props.data);
    }
  }

  public render() {
    return (
      <g ref={this.setGroupRef} />
    )
  };
}

export default Curve;