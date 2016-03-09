/* Alex Zarley, 2016 */


//initialize functions called when script loads
function initialize(){
    // cities();
    // addColumns();
    // addEvents();
    // clickMe();
    //jsAjax();
    // jQueryAjax();
    debugAjax();
};

// //creates array globally to be used in multiple functions
// var cityPop;
//
// //function to create array of city objects, create table, and populate table with cities/populations
// function cities(){
//
//     // //defines array containing an object for each city with properties for the city's name and population
//     cityPop = [
//         {
//             city: 'Portland',
//             population: 609456
//         },
//         {
//             city: 'Salem',
//             population: 160614
//         },
//         {
//             city: 'Eugene',
//             population: 159190
//         },
//         {
//             city: 'Gresham',
//             population: 109397
//         }
//     ];
//
//     //append the tble elements to the div
//     $('#mydiv').append('<table>');
//
//     //appends a table header to the table for the title
//     $('table').append('<th colspan="2">Most Populous Cities in Oregon 2013</th>');
//
//     //appends a header row for column names
//     $('table').append('<tr>');
//
//     //adds the 'City' and 'Population' columns to the header row
//     $('tr').append('<th class = "colHeader">City</th><th class = "colHeader">Population</th>');
//
//     //loop to add a new row for each City
//     for (var i = 0; i < cityPop.length; i++){
//         //assigns html string to a variable for ease of reading
//         var rowHtml = '<tr><td>' + cityPop[i].city + '</td><td>' + cityPop[i].population + '</td></tr>';
//         //add the row's HTML string to the table
//         $('table').append(rowHtml);
//     };
// }
//
// //function to loop over each city's population, categorize its size, and add a column to display that size
// function addColumns(){
//
//     //looks at each 'tr' element on page
//     $('tr').each(function(i){
//
//       //creates column header for city size on first pass
//     	if (i == 0){
//
//     		$(this).append('<th>City Size</th>');
//
//       //for 2nd-4th pass creates and sets citySize variable based on population of city in array for each city
//     	} else {
//
//     		var citySize;
//
//         //i-1 because cityPop array index starts at 0, but .each function creates header when i==0
//     		if (cityPop[i-1].population < 100000){
//     			citySize = 'Small';
//
//     		} else if (cityPop[i-1].population < 500000){
//     			citySize = 'Medium';
//
//     		} else {
//     			citySize = 'Large';
//     		};
//
//         //appends cell to current 'tr' and adds the citySize to it
//     		$(this).append('<td>' + citySize + '</td>');
//       };
//     });
//   };
//
// //function to randomly generate an RGB text color for 'table' elements
// function addEvents(){
//
//   //the function to choose 3 values for RGB is initiated when you mouse over the table
// 	$('table').mouseover(function(){
//
//     //declares color variable with appropriate css format
// 		var color = "rgb(";
//
//     //for loop that generates random numbers for RGB values and adds commas/parenthesis appropriately for css
// 		for (var i=0; i<3; i++){
//
//       //randomly generates float between 0 and 1, multiplies by 255 and rounds to integer
// 			var random = Math.round(Math.random() * 255);
//
//       //concatenates previous 'value' of color with value of 'random'
// 			color += random;
//
//       //after first two loops, a comma is added each time
// 			if (i<2){
// 				color += ",";
//
//         //on third loop, ) is added to 'color' string
// 			} else {
// 				color += ")";
// 		  };
//     };
//
//     //adds 'color' property and 'color' variable to the 'table' element for css styling
// 		$("table").css('color', color);
//   });
// };
//
//   //function that creates popup when you click on table
// 	function clickMe(){
//
//     $("table").click(function(){
// 		    alert('Hey, you clicked me!');
// 	});
// };
//**** how AJAX works using native javascript
// function jsAjax(){
//   //Step 1: Create the request
//   var ajaxRequest = new XMLHttpRequest();
//
//   //Step 2: Create an event handler to send received data to a callback function
//   ajaxRequest.onreadystatechange = function(){
//       if (ajaxRequest.readyState === 4){
//           callback(ajaxRequest.response);
//       };
//   };
//
//   //Step 3: Open the server connection
//   ajaxRequest.open('GET', 'data/Madison.geojson', true)
//
//   //step 4: Set the response data type
//   ajaxRequest.responseType = "json";
//
//   //step 5: sent the request
//   ajaxRequest.send();
//
// };
//
// //define callback function
// function callback(response){
//   //tasks using the data go here
//   console.log(response);
// };
//
// window.onload = jsAjax();


//***one way to use Ajax with jQuery
//define AJAX function

//
//     //jQuery AJAX alias method
// //     $.get("data/Madison.geojson", callback, "json");
// };
//     //this will not work because mydata is not definied yet because code executes
//     //before the response has been received
//     console.log(mydata);


// //define callback function
// function callback(response, status, jqXHRobject){
//     //tasks using the data go here
//     console.log(response);
// };

//this makes sure our function (jQueryAjax) will not run until the document, i.e. the DOM, is ready
// $(document).ready(jQueryAjax);

//function to add data from AJAX Callback function to '#mydiv' element on index.html
function debugCallback(response){

  //this will be defined and print because this function is not called until dataType
  //from AJAX query has been received
  console.log(response);

  //converts data in callback return object into a string and adds string to mydiv
	$('#mydiv').append('<br>GeoJSON data:</br>' + JSON.stringify(response));
};

//AJAX function to retrieve data from GeoJSON file
function debugAjax(){

//jQuery AJAX method using an anonymous function
	$.ajax("data/MegaCities.geojson", {
		dataType: "json",
		success: function(response){

      // var mydata = response;
      //call function from within callback function passing GeoJSON object as parameter
			debugCallback(response);

      //this will be defined and print because this line of code is in anonymous
      //callback function which will not be called until data from AJAX query has been received
      console.log(response);
		}
	});
      //this will be undefined because it will try to log to console before response has been received
      console.log(response);
};
//call the initialize function when the window has loaded
$(document).ready(initialize);
