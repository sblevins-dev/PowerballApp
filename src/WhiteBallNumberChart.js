import * as d3 from 'd3'
import { useEffect, useRef } from 'react';

const WhiteBallNumberChart = ({ data }) => {



  const svgRef = useRef();

  useEffect(() => {
    if (!data || data.length === 0) return;

    let combos = data.map((arr) => {
      let curr = arr[9].split(" ");
      curr.pop();
      return curr.map((num) => parseInt(num, 10));
    });

    // Define chart dimensions
    const width = window.innerWidth > 1500 ? 1500 : window.innerWidth;
    const height = 800;
    const margin = { top: 20, right: 20, bottom: 50, left: 50 };

    // Compute frequencies of each number
    const numberFrequencies = {};

    combos.forEach((number) => {
      number.forEach(num => {
        if (!numberFrequencies[num]) {
          numberFrequencies[num] = 0;
        }
        numberFrequencies[num]++;
      })

    });

    // Convert frequencies to array of objects
    const frequencyData = Object.entries(numberFrequencies).map(([number, count]) => ({
      number: +number,
      count,
    }));

    // Sort data by number
    frequencyData.sort((a, b) => b.count - a.count);

    // Create scales
    const xScale = d3.scaleLinear()
      .domain([0, d3.max(frequencyData, d => d.count)])
      .nice()
      .range([margin.left, width - margin.right]);

    const yScale = d3.scaleBand()
      .domain(frequencyData.map(d => d.number))
      .range([margin.top, height - margin.bottom])
      .padding(0.5);

    // Select SVG element
    const svg = d3.select(svgRef.current);

    // Draw bars
    svg.selectAll('rect')
      .data(frequencyData)
      .join('rect')
      .attr('x', margin.left)
      .attr('y', d => yScale(d.number))
      .attr('width', d => xScale(d.count) - margin.left)
      .attr('height', yScale.bandwidth())
      .attr('fill', 'red');

    // Draw x-axis
    svg.select('.x-axis')
      .attr('transform', `translate(0, ${height - margin.bottom})`)
      .call(d3.axisBottom(xScale).ticks(5));

    // Draw y-axis
    svg.select('.y-axis')
      .attr('transform', `translate(${margin.left}, 0)`)
      .call(d3.axisLeft(yScale));

  }, [data]);

  return (
    <>
      <h2>Most Occurring</h2>
      <svg ref={svgRef} width={window.innerWidth} height={800}>
        <g className="x-axis" />
        <g className="y-axis" />
      </svg>
    </>

  )
}

export default WhiteBallNumberChart