import * as React from 'react';
import * as d3 from "d3";
import YAxisLabel from './yAxisLabel';
import { IData, IMargins } from '../types';

type IPassedProps = {
  data: IData;
  yScale: any;
  margins: IMargins;
  chartHeight: number;
}

class YAxis extends React.Component<IPassedProps> {
  /**
   * A reference to the group rendered by this component.
   * This reference is then given d3 and further governed by d3.
   */
  private YAxisGroupRef = null;

  /**
   * The actual axis created by d3
   */
  private yAxis: any;

  /**
   * Which axisType is generated
   * (holds the axis type consistent throughout the component)
   */
  private yAxisType = d3.axisLeft;

  /**
   * Sets the reference to the element rendered by this component
   * and governed by d3
   *
   * @param element is a DOM-element
   */
  private setYAxisGroupRef = (element: any): void => {
    this.YAxisGroupRef = element;
  };

  /**
   * Contains the **static** d3 logic for this component
   * 1. Setting the yAxis
   * 2. Applying the scale to the axis
   *
   * @param axisRef   reference to the element governed by d3
   * @param yScale    the function for scaling the data values
   * @param axisType  generator function for the desired axis type
   */
  private createAxis = (axisRef: any, yScale: any, axisType: any): void => {
    this.yAxis = d3.select(axisRef)
      .attr('class', 'y-axis');

    this.yAxis.call(axisType(yScale));
  };

  /**
   * Contains all the dynamic d3 logic regarding this component.
   * This function reflects the changes in the data this component depends upon
   *
   * 1. Updating the scale domain if the data changes
   *
   * @param data      data for the chart. Needed so the boundaries can be calculated
   * @param yScale    the function for scaling the data values
   * @param yAxis     the axis created by d3
   * @param axisType  generator function for the desired axis type
   */
  private updateAxis = (data: number[], yScale: any, yAxis: any, axisType: any): void => {
    const maxY: number = d3.max(data, (d: number) => d) || 1;
    const minY: number = d3.min(data, (d: number) => d) || 0;

    yScale.domain([Math.trunc(minY * 0.8), Math.trunc(maxY * 1.2)]);
    yAxis.call(axisType(yScale));
  };

  public componentDidMount() {
    if (!!this.YAxisGroupRef) {
      this.createAxis(this.YAxisGroupRef, this.props.yScale, this.yAxisType);
      this.updateAxis(this.props.data, this.props.yScale, this.yAxis, this.yAxisType);
    }

  }

  public componentDidUpdate() {
    if (!!this.YAxisGroupRef) {
      this.updateAxis(this.props.data, this.props.yScale, this.yAxis, this.yAxisType);
    }
  }

  public render() {
    return (
      <>
        <g ref={this.setYAxisGroupRef} />
        <YAxisLabel margins={this.props.margins} chartWidth={this.props.chartHeight} />
      </>
    );
  }

}

export default YAxis;