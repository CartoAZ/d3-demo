//execute script when window is loaded
window.onload = function(){
    var w = 900, h = 500;

    var container = d3.select("body")
        //some comments
        .append("svg")
        .attr("width", w)
        .attr("height", h)
        .attr("class", "container");
    var innerRect = container.append("rect")
        .datum(400)
        .attr("width", function(d){
            return d * 2;
        })
        .attr("height", function(d){
            return d;
        })
        .attr("class", "innerRect")
        .attr("x", 50)
        .attr("y", 50)
        .style("fill", "white")
    console.log(innerRect);

    var dataArray = [10, 20, 30, 40, 50];

    var cricles = container.selectAll(".circles")
        .data(dataArray)
        .enter()
        .append("circle")
        .attr("class", "circles")
}
