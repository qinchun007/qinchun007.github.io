//<rect x="150" y="50" rx="20" ry="20" width="150" height="150"
//style="fill:#ff6666;stroke:black;stroke-width:5;opacity:0.5" />
//<rect x="305" y="50" rx="20" ry="20" width="150" height="150"
//style="fill:#ff8c66;stroke:black;stroke-width:5;opacity:0.5" />
//<rect x="150" y="205" rx="20" ry="20" width="150" height="150"
//style="fill:#d9ff66;stroke:black;stroke-width:5;opacity:0.5" />
//<rect x="305" y="205" rx="20" ry="20" width="150" height="150"
//style="fill:#668cff;stroke:black;stroke-width:5;opacity:0.5" /> 

function run() {
    var cx = $('#height').val();

    console.log(cx);
    var cy = $('#weight').val();
    console.log(cy);
    var cx1 = cx * 1 + 155;
    console.log(cx1);
    var cy1 = cy * 1 + 155;
    console.log(cy1);
    var svgctrl = d3.select('svg');
    var r1 = svgctrl.append('rect');
    var r2 = svgctrl.append('rect');
    var r3 = svgctrl.append('rect');
    var r4 = svgctrl.append('rect');
    r1.attr('x', cx).attr('y', cy).attr('rx', 20).attr('ry', 20).attr('width', 150).attr('height', 150).attr('fill', '#ff6666').attr('stroke', 'black').attr('stroke-width', 5).attr('opacity', 0.5);
    r2.attr('x', cx1).attr('y', cy).attr('rx', 20).attr('ry', 20).attr('width', 150).attr('height', 150).attr('fill', '#ff8c66').attr('stroke', 'black').attr('stroke-width', 5).attr('opacity', 0.5);
    r3.attr('x', cx).attr('y', cy1).attr('rx', 20).attr('ry', 20).attr('width', 150).attr('height', 150).attr('fill', '#d9ff66').attr('stroke', 'black').attr('stroke-width', 5).attr('opacity', 0.5);
    r4.attr('x', cx1).attr('y', cy1).attr('rx', 20).attr('ry', 20).attr('width', 150).attr('height', 150).attr('fill', '#668cff').attr('stroke', 'black').attr('stroke-width', 5).attr('opacity', 0.5);

}

$("#move").bind('click', run);






var cx = 100;
var cy = 50;
var svgctrl = d3.select('svg');
var r1 = svgctrl.append('rect');
var r2 = svgctrl.append('rect');
var r3 = svgctrl.append('rect');
var r4 = svgctrl.append('rect');
var l1 = svgctrl.append('line');
r1.attr('x', cx).attr('y', cy).attr('rx', 20).attr('ry', 20).attr('width', 150).attr('height', 150).attr('fill', '#ff6666').attr('stroke', 'black').attr('stroke-width', 5).attr('opacity', 0.5);
r2.attr('x', cx + 155).attr('y', cy).attr('rx', 20).attr('ry', 20).attr('width', 150).attr('height', 150).attr('fill', '#ff8c66').attr('stroke', 'black').attr('stroke-width', 5).attr('opacity', 0.5);
r3.attr('x', cx).attr('y', cy + 155).attr('rx', 20).attr('ry', 20).attr('width', 150).attr('height', 150).attr('fill', '#d9ff66').attr('stroke', 'black').attr('stroke-width', 5).attr('opacity', 0.5);
r4.attr('x', cx + 155).attr('y', cy + 155).attr('rx', 20).attr('ry', 20).attr('width', 150).attr('height', 150).attr('fill', '#668cff').attr('stroke', 'black').attr('stroke-width', 5).attr('opacity', 0.5);
l1.attr('x1', cx + 153).attr('y1', cy + 305).attr('x2', cx + 153).attr('y2', cy + 505).attr('stroke', black).attr('stroke-width', 2);
//<line x1="0" y1="0" x2="200" y2="200" style="stroke:rgb(255,0,0);stroke-width:2" />

//<rect x="50" y="20" width="175" height="120" style="fill:blue;stroke:pink;stroke-width:5;fill-opacity:0.1;stroke-opacity:0.9"
//                />
//              <rect x="75" y="45" rx="6" ry="6" width="50" height="50" style="fill:#ff9999;stroke:black;stroke-width:2;opacity:0.5" />
//
//                  <rect x="150" y="45" rx="6" ry="6" width="50" height="50" style="fill: #ff6666;stroke:black;stroke-width:2;opacity:0.5" />
//                <polyline points="128,110 138,115 148,110 " style="fill:none;stroke: #ff99bb;stroke-width:4" />
//              <polygon points="138,143 108,168 168,168" style="fill: #adc2eb;stroke:#ffcccc;stroke-width:1" />

//var svgctrl = d3.select('svg');
//var r1 = svgctrl.append('rect');
//var r2 = svgctrl.append('rect');
//var r3 = svgctrl.append('rect');
//var l1 = svgctrl.append('polyline');
//var g1 = svgctrl.append('polygon');
//r1.attr('x', 50).attr('y', 20).attr('width', 175).attr('height', 120).attr('fill', blue).attr('stroke', pink).attr('stroke-width', 5).attr('fill-opacity', 0.1).attr('stroke-opacity', 0.9);