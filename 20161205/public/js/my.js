var run = function() {;
    console.log('執行到了');
    var svg = d3.select('#output');

    var c1 = svg.append('circle')
        .attr('cx', 50)
        .attr('cy', 50)
        .attr('r', 40)
        .attr('stroke', 'green')
        .attr('stroke-width', 4)
        .attr('fill', 'yellow');
};


$('#run').bind('click', run);