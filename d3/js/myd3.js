//<rect x="150" y="50" rx="20" ry="20" width="150" height="150"
//style="fill:#ff6666;stroke:black;stroke-width:5;opacity:0.5" />
//<rect x="305" y="50" rx="20" ry="20" width="150" height="150"
//style="fill:#ff8c66;stroke:black;stroke-width:5;opacity:0.5" />
//<rect x="150" y="205" rx="20" ry="20" width="150" height="150"
//style="fill:#d9ff66;stroke:black;stroke-width:5;opacity:0.5" />
//<rect x="305" y="205" rx="20" ry="20" width="150" height="150"
//style="fill:#668cff;stroke:black;stroke-width:5;opacity:0.5" /> 
var svgctrl = d3.select('svg');
var r1 = svgctrl.append('rect');
var r2 = svgctrl.append('rect');
var r3 = svgctrl.append('rect');
var r4 = svgctrl.append('rect');
var l1 = svgctrl.append('line');
var e1 = svgctrl.append('ellipse');
var e2 = svgctrl.append('ellipse');

function draw(cx, cy) {
    var cx1 = cx * 1 + 155;

    var cy1 = cy * 1 + 155;

    var cx2 = cx * 1 + 153;
    var cy2 = cy * 1 + 285;
    var cy3 = cy * 1 + 505;
    var cx3 = cx * 1 + 125;
    var cx4 = cx * 1 + 180;
    r1.attr('x', cx).attr('y', cy).attr('rx', 20).attr('ry', 20).attr('width', 150).attr('height', 150).attr('fill', '#ff6666').attr('stroke', 'black').attr('stroke-width', 5).attr('opacity', 0.5);
    r2.attr('x', cx1).attr('y', cy).attr('rx', 20).attr('ry', 20).attr('width', 150).attr('height', 150).attr('fill', '#ff8c66').attr('stroke', 'black').attr('stroke-width', 5).attr('opacity', 0.5);
    r3.attr('x', cx).attr('y', cy1).attr('rx', 20).attr('ry', 20).attr('width', 150).attr('height', 150).attr('fill', '#d9ff66').attr('stroke', 'black').attr('stroke-width', 5).attr('opacity', 0.5);
    r4.attr('x', cx1).attr('y', cy1).attr('rx', 20).attr('ry', 20).attr('width', 150).attr('height', 150).attr('fill', '#668cff').attr('stroke', 'black').attr('stroke-width', 5).attr('opacity', 0.5);
    l1.attr('x1', cx2).attr('y1', cy2).attr('x2', cx2).attr('y2', cy3).attr('stroke', 'black').attr('stroke-width', 5);
    e1.attr('cx', cx3).attr('cy', cy3).attr('rx', 25).attr('ry', 20).attr('fill', '#669900');
    e2.attr('cx', cx4).attr('cy', cy3).attr('rx', 25).attr('ry', 20).attr('fill', '#669900');
}

function run() {
    var cx = $('#height').val();

    console.log(cx);
    var cy = $('#weight').val();
    console.log(cy);
    draw(cx, cy);


}

function xrandom() {
    var x = Math.floor(Math.random() * 400);

    $("#height:text").val(x);
    console.log(x);


}

function yrandom() {
    var y = Math.floor(Math.random() * 400);

    $("#weight:text").val(y);
    console.log(y);


}

$("#move").bind('click', run);

$("#randomx").bind('click', xrandom);

$("#randomy").bind('click', yrandom);



//function() {

//  $("#box").animate({ "top": "+=50px" }, "slow");
//   console.log("xx");
//}


var cx = 100;
var cy = 50;
var svgctrl = d3.select('svg');
var r1 = svgctrl.append('rect');
var r2 = svgctrl.append('rect');
var r3 = svgctrl.append('rect');
var r4 = svgctrl.append('rect');
var l1 = svgctrl.append('line');
var e1 = svgctrl.append('ellipse');
var e2 = svgctrl.append('ellipse');
r1.attr('x', cx).attr('y', cy).attr('rx', 20).attr('ry', 20).attr('width', 150).attr('height', 150).attr('fill', '#ff6666').attr('stroke', 'black').attr('stroke-width', 5).attr('opacity', 0.5);
r2.attr('x', cx + 155).attr('y', cy).attr('rx', 20).attr('ry', 20).attr('width', 150).attr('height', 150).attr('fill', '#ff8c66').attr('stroke', 'black').attr('stroke-width', 5).attr('opacity', 0.5);
r3.attr('x', cx).attr('y', cy + 155).attr('rx', 20).attr('ry', 20).attr('width', 150).attr('height', 150).attr('fill', '#d9ff66').attr('stroke', 'black').attr('stroke-width', 5).attr('opacity', 0.5);
r4.attr('x', cx + 155).attr('y', cy + 155).attr('rx', 20).attr('ry', 20).attr('width', 150).attr('height', 150).attr('fill', '#668cff').attr('stroke', 'black').attr('stroke-width', 5).attr('opacity', 0.5);
l1.attr('x1', cx + 153).attr('y1', cy + 285).attr('x2', cx + 153).attr('y2', cy + 505).attr('stroke', 'black').attr('stroke-width', 5);
e1.attr('cx', cx + 125).attr('cy', cy + 505).attr('rx', 25).attr('ry', 20).attr('fill', '#669900');
e2.attr('cx', cx + 180).attr('cy', cy + 505).attr('rx', 25).attr('ry', 20).attr('fill', '#669900');
//<ellipse cx="220" cy="70" rx="190" ry="20" style="fill:lime" />
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