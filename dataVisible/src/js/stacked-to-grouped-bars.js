// URL: https://observablehq.com/@d3/stacked-to-grouped-bars
// Title: Stacked-to-Grouped Bars
// Author: D3 (@d3)
// Version: 215
// Runtime version: 1

const m0 = {
  id: "208ac4d6c3f58ab1@215",
  variables: [
    {
      inputs: ["md"],
      value: (function(md){return(
md`# Stacked-to-Grouped Bars

Animations can preserve object constancy, allowing the reader to follow the data across views. See [Heer and Robertson](http://vis.berkeley.edu/papers/animated_transitions/) for more.`
)})
    },
    {
      name: "viewof layout",
      inputs: ["html"],
      value: (function(html)
{
  const form = html`<form>
  <label style="margin-right:0.5em;"><input type=radio name=radio value="stacked" checked> Stacked</label>
  <label style="margin-right:0.5em;"><input type=radio name=radio value="grouped"> Grouped</label>
</form>`;
  form.oninput = () => form.value = form.radio.value;
  form.onchange = () => { // Safari…
    form.value = form.radio.value;
    form.dispatchEvent(new CustomEvent("input"));
  };
  form.value = form.radio.value;
  setTimeout(() => {
    form.value = form.radio.value = "grouped";
    form.dispatchEvent(new CustomEvent("input"));
  }, 3000);
  return form;
}
)
    },
    {
      name: "layout",
      inputs: ["Generators","viewof layout"],
      value: (G, _) => G.input(_)
    },
    {
      name: "chart",
      inputs: ["d3","DOM","width","height","y01z","z","x","margin","xAxis","y","yMax","n","y1Max"],
      value: (function(d3,DOM,width,height,y01z,z,x,margin,xAxis,y,yMax,n,y1Max)
{
  const svg = d3.select(DOM.svg(width, height));

  const rect = svg.selectAll("g")
    .data(y01z)
    .enter().append("g")
      .attr("fill", (d, i) => z(i))
    .selectAll("rect")
    .data(d => d)
    .join("rect")
      .attr("x", (d, i) => x(i))
      .attr("y", height - margin.bottom)
      .attr("width", x.bandwidth())
      .attr("height", 0);

  svg.append("g")
      .call(xAxis);

  function transitionGrouped() {
    y.domain([0, yMax]);

    rect.transition()
        .duration(500)
        .delay((d, i) => i * 20)
        .attr("x", (d, i) => x(i) + x.bandwidth() / n * d[2])
        .attr("width", x.bandwidth() / n)
      .transition()
        .attr("y", d => y(d[1] - d[0]))
        .attr("height", d => y(0) - y(d[1] - d[0]));
  }

  function transitionStacked() {
    y.domain([0, y1Max]);

    rect.transition()
        .duration(500)
        .delay((d, i) => i * 20)
        .attr("y", d => y(d[1]))
        .attr("height", d => y(d[0]) - y(d[1]))
      .transition()
        .attr("x", (d, i) => x(i))
        .attr("width", x.bandwidth());
  }

  function update(layout) {
    if (layout === "stacked") transitionStacked();
    else transitionGrouped();
  }

  return Object.assign(svg.node(), {update});
}
)
    },
    {
      inputs: ["chart","layout"],
      value: (function(chart,layout){return(
chart.update(layout)
)})
    },
    {
      name: "xz",
      inputs: ["d3","m"],
      value: (function(d3,m){return(
d3.range(m)
)})
    },
    {
      name: "yz",
      inputs: ["d3","n","bumps","m"],
      value: (function(d3,n,bumps,m){return(
[[465, 453, 505, 629, 492, 489, 450, 499, 493, 457, 513, 468, 490, 479, 467, 410, 549, 512, 560, 491, 470, 462, 381, 437, 435, 454, 492, 474, 596, 476, 488, 456, 480, 509, 451, 483, 464, 430, 450, 501, 507, 416, 459, 508, 468, 393, 482, 470, 466, 437, 484, 511, 448, 454, 456, 456, 499, 340, 520, 482, 441, 467, 451, 452, 455, 444], [125, 162, 118, 124, 128, 133, 188, 111, 126, 229, 232, 172, 130, 141, 153, 188, 158, 208, 60, 131, 151, 148, 285, 164, 185, 166, 115, 146, 146, 148, 134, 159, 131, 146, 173, 137, 142, 190, 170, 246, 203, 209, 144, 113, 153, 247, 198, 158, 148, 168, 146, 180, 172, 173, 154, 133, 134, 338, 247, 141, 184, 168, 175, 183, 256, 166], [464, 453, 504, 628, 491, 489, 450, 499, 493, 457, 513, 468, 489, 479, 467, 410, 549, 512, 560, 490, 470, 461, 381, 437, 434, 454, 492, 473, 596, 475, 487, 456, 479, 509, 451, 483, 464, 429, 449, 500, 506, 416, 458, 508, 468, 393, 482, 469, 465, 436, 484, 510, 447, 454, 455, 455, 499, 339, 520, 481, 441, 466, 450, 452, 454, 443], [590, 615, 623, 753, 620, 622, 638, 610, 619, 686, 745, 640, 620, 620, 620, 598, 707, 720, 620, 622, 621, 610, 666, 601, 620, 620, 607, 620, 742, 624, 622, 615, 611, 655, 624, 620, 606, 620, 620, 747, 710, 625, 603, 621, 621, 640, 680, 628, 614, 605, 630, 691, 620, 627, 610, 589, 633, 678, 767, 623, 625, 635, 626, 635, 711, 610]]
)})
    },
    {
      name: "y01z",
      inputs: ["d3","n","yz"],
      value: (function(d3,n,yz){return(
[[[0, 166, 0], [0, 166, 0], [0, 166, 0], [0, 166, 0], [0, 166, 0], [0, 166, 0], [0, 166, 0], [0, 166, 0], [0, 166, 0], [0, 166, 0], [0, 166, 0], [0, 166, 0], [0, 166, 0], [0, 166, 0], [0, 166, 0], [0, 166, 0], [0, 166, 0], [0, 166, 0], [0, 166, 0], [0, 166, 0], [0, 166, 0], [0, 166, 0], [0, 166, 0], [0, 166, 0], [0, 166, 0], [0, 166, 0], [0, 166, 0], [0, 166, 0], [0, 166, 0], [0, 166, 0], [0, 166, 0], [0, 166, 0], [0, 166, 0], [0, 166, 0], [0, 166, 0], [0, 166, 0], [0, 166, 0], [0, 166, 0], [0, 166, 0], [0, 166, 0], [0, 166, 0], [0, 166, 0], [0, 166, 0], [0, 166, 0], [0, 166, 0], [0, 166, 0], [0, 166, 0], [0, 166, 0], [0, 166, 0], [0, 166, 0], [0, 166, 0], [0, 166, 0], [0, 166, 0], [0, 166, 0], [0, 166, 0], [0, 166, 0], [0, 166, 0], [0, 166, 0], [0, 166, 0], [0, 166, 0], [0, 166, 0], [0, 166, 0], [0, 166, 0], [0, 166, 0], [0, 166, 0], [0, 166, 0]], [[166, 610, 1], [166, 610, 1], [166, 610, 1], [166, 610, 1], [166, 610, 1], [166, 610, 1], [166, 610, 1], [166, 610, 1], [166, 610, 1], [166, 610, 1], [166, 610, 1], [166, 610, 1], [166, 610, 1], [166, 610, 1], [166, 610, 1], [166, 610, 1], [166, 610, 1], [166, 610, 1], [166, 610, 1], [166, 610, 1], [166, 610, 1], [166, 610, 1], [166, 610, 1], [166, 610, 1], [166, 610, 1], [166, 610, 1], [166, 610, 1], [166, 610, 1], [166, 610, 1], [166, 610, 1], [166, 610, 1], [166, 610, 1], [166, 610, 1], [166, 610, 1], [166, 610, 1], [166, 610, 1], [166, 610, 1], [166, 610, 1], [166, 610, 1], [166, 610, 1], [166, 610, 1], [166, 610, 1], [166, 610, 1], [166, 610, 1], [166, 610, 1], [166, 610, 1], [166, 610, 1], [166, 610, 1], [166, 610, 1], [166, 610, 1], [166, 610, 1], [166, 610, 1], [166, 610, 1], [166, 610, 1], [166, 610, 1], [166, 610, 1], [166, 610, 1], [166, 610, 1], [166, 610, 1], [166, 610, 1], [166, 610, 1], [166, 610, 1], [166, 610, 1], [166, 610, 1], [166, 610, 1], [166, 610, 1]], [[610, 609, 2], [610, 609, 2], [610, 609, 2], [610, 609, 2], [610, 609, 2], [610, 609, 2], [610, 609, 2], [610, 609, 2], [610, 609, 2], [610, 609, 2], [610, 609, 2], [610, 609, 2], [610, 609, 2], [610, 609, 2], [610, 609, 2], [610, 609, 2], [610, 609, 2], [610, 609, 2], [610, 609, 2], [610, 609, 2], [610, 609, 2], [610, 609, 2], [610, 609, 2], [610, 609, 2], [610, 609, 2], [610, 609, 2], [610, 609, 2], [610, 609, 2], [610, 609, 2], [610, 609, 2], [610, 609, 2], [610, 609, 2], [610, 609, 2], [610, 609, 2], [610, 609, 2], [610, 609, 2], [610, 609, 2], [610, 609, 2], [610, 609, 2], [610, 609, 2], [610, 609, 2], [610, 609, 2], [610, 609, 2], [610, 609, 2], [610, 609, 2], [610, 609, 2], [610, 609, 2], [610, 609, 2], [610, 609, 2], [610, 609, 2], [610, 609, 2], [610, 609, 2], [610, 609, 2], [610, 609, 2], [610, 609, 2], [610, 609, 2], [610, 609, 2], [610, 609, 2], [610, 609, 2], [610, 609, 2], [610, 609, 2], [610, 609, 2], [610, 609, 2], [610, 609, 2], [610, 609, 2], [610, 609, 2]], [[609, 610, 3], [609, 610, 3], [609, 610, 3], [609, 610, 3], [609, 610, 3], [609, 610, 3], [609, 610, 3], [609, 610, 3], [609, 610, 3], [609, 610, 3], [609, 610, 3], [609, 610, 3], [609, 610, 3], [609, 610, 3], [609, 610, 3], [609, 610, 3], [609, 610, 3], [609, 610, 3], [609, 610, 3], [609, 610, 3], [609, 610, 3], [609, 610, 3], [609, 610, 3], [609, 610, 3], [609, 610, 3], [609, 610, 3], [609, 610, 3], [609, 610, 3], [609, 610, 3], [609, 610, 3], [609, 610, 3], [609, 610, 3], [609, 610, 3], [609, 610, 3], [609, 610, 3], [609, 610, 3], [609, 610, 3], [609, 610, 3], [609, 610, 3], [609, 610, 3], [609, 610, 3], [609, 610, 3], [609, 610, 3], [609, 610, 3], [609, 610, 3], [609, 610, 3], [609, 610, 3], [609, 610, 3], [609, 610, 3], [609, 610, 3], [609, 610, 3], [609, 610, 3], [609, 610, 3], [609, 610, 3], [609, 610, 3], [609, 610, 3], [609, 610, 3], [609, 610, 3], [609, 610, 3], [609, 610, 3], [609, 610, 3], [609, 610, 3], [609, 610, 3], [609, 610, 3], [609, 610, 3], [609, 610, 3]]]
)})
    },
    {
      name: "yMax",
      inputs: ["d3","yz"],
      value: (function(d3,yz){return(
d3.max(yz, y => d3.max(y))
)})
    },
    {
      name: "y1Max",
      inputs: ["d3","y01z"],
      value: (function(d3,y01z){return(
d3.max(y01z, y => d3.max(y, d => d[1]))
)})
    },
    {
      name: "x",
      inputs: ["d3","xz","margin","width"],
      value: (function(d3,xz,margin,width){return(
d3.scaleBand()
    .domain(xz)
    .rangeRound([margin.left, width - margin.right])
    .padding(0.08)
)})
    },
    {
      name: "y",
      inputs: ["d3","y1Max","height","margin"],
      value: (function(d3,y1Max,height,margin){return(
d3.scaleLinear()
    .domain([0, y1Max])
    .range([height - margin.bottom, margin.top])
)})
    },
    {
      name: "z",
      inputs: ["d3","n"],
      value: (function(d3,n){return(
d3.scaleSequential(d3.interpolateBlues)
    .domain([-0.5 * n, 1.5 * n])
)})
    },
    {
      name: "xAxis",
      inputs: ["height","margin","d3","x"],
      value: (function(height,margin,d3,x){return(
svg => svg.append("g")
    .attr("transform", `translate(0,${height - margin.bottom})`)
    .call(d3.axisBottom(x).tickSizeOuter(0).tickFormat(() => ""))
)})
    },
    {
      name: "n",
      value: (function(){return(
4
)})
    },
    {
      name: "m",
      value: (function(){return(
66
)})
    },
    {
      name: "height",
      value: (function(){return(
500
)})
    },
    {
      name: "margin",
      value: (function(){return(
{top: 0, right: 0, bottom: 10, left: 0}
)})
    },
    {
      name: "bumps",
      value: (function(){return(
function bumps(m) {
  const values = [];

  // Initialize with uniform random values in [0.1, 0.2).
  for (let i = 0; i < m; ++i) {
    values[i] = 0.1 + 0.1 * Math.random();
  }

  // Add five random bumps.
  for (let j = 0; j < 5; ++j) {
    const x = 1 / (0.1 + Math.random());
    const y = 2 * Math.random() - 0.5;
    const z = 10 / (0.1 + Math.random());
    for (let i = 0; i < m; i++) {
      const w = (i / m - y) * z;
      values[i] += x * Math.exp(-w * w);
    }
  }

  // Ensure all values are positive.
  for (let i = 0; i < m; ++i) {
    values[i] = Math.max(0, values[i]);
  }

  return values;
}
)})
    },
    {
      name: "d3",
      inputs: ["require"],
      value: (function(require){return(
require("d3@5")
)})
    }
  ]
};

const notebook = {
  id: "208ac4d6c3f58ab1@215",
  modules: [m0]
};

export default notebook;
