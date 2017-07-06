
var edgeLength = 16;

var hoverStateEnum = {
	BW: 0,
	RGB: 1,
	ALPHA: 2
}

var hoverState = hoverStateEnum.BW;


$(document).ready(
	function() {
		drawGrid(edgeLength);
		
	setHoverAction(hoverState);
});

function clearBoard(){
	$("td").css({"background-color": "white", "opacity": 1.0});
}

function drawGrid(newEdgeLength) {
	$(".grid").empty();
	var output = "";
		$(".grid").append( function() {
		for (var i = 0; i < newEdgeLength; i++){
			output = output + "<tr>"
			for (var j = 0; j < newEdgeLength; j++){
				output = output + "<td></td>";
			}
			output = output + "</tr>";
		}
		return output;
	})
}

function changeGridSize(){
	var newSize = prompt("How large?", 64);

	if (newSize !== null){
		drawGrid(newSize);
		setHoverAction(hoverState);
	}
	else {
		alert("That is an invalid value");

	}
	
	
	return false;
}

function setHoverAction(newState){
	console.log(newState);
	if (newState == hoverStateEnum.BW){ 
		$("td").off('mouseenter mouseleave');
		$("td").hover( function() {
			$(this).css("background-color", "black");
			})	
		}

	if (newState == hoverStateEnum.RGB){ 
		$("td").off('mouseenter mouseleave');
		$("td").on('mouseenter', function() {
			$(this).css({"background-color": getRandomColor(), "opacity": 1});

		});
		//$("td").hover( function() {
			//$(this).css("background-color", getRandomColor());
		//})		
	}

	
	if (newState === hoverStateEnum.ALPHA){
		
		$("td").off('mouseenter mouseleave');

		$("td").hover( function() {
			$(this).css({"opacity": "-=0.1"});
			});
		
	}	
	
	
}
function getRandomColor(){
	var color = "#";
	
	for (var i = 0; i < 6; i++){
		color += (Math.floor(Math.random() * 16)).toString(16);
	}

	return color;
}

function goBW(){
	var newState = 0; 
	setHoverAction(newState);
}


function goRGB(){
	var newState = 1;
	setHoverAction(newState);
}

function goFade(){
	var newState = 2;
	setHoverAction(newState);
}