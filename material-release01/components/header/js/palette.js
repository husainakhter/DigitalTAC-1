
function addMDColors(data) {
  var target = data.datasets[0];
  
  var colors = [
    
	{color: "#ffc107", hoverColor: "#ffca28"},
	
    {color: "#cddc39", hoverColor: "#d4e157"},
    {color: "#3f51b5", hoverColor: "#5c6bc0"},
    {color: "#03a9f4", hoverColor: "#29b6f6"},
	
    {color: "#ff5722", hoverColor: "#ff7043"},
	
    {color: "#9c27b0", hoverColor: "#ab47bc"},
    {color: "#e91e63", hoverColor: "#ec407a"},
    {color: "#9e9e9e", hoverColor: "#bdbdbd"},
    {color: "#009688", hoverColor: "#26a69a"},
    {color: "#ffeb3b", hoverColor: "#ffee58"},
    {color: "#f44336", hoverColor: "#ef5350"},
    {color: "#795548", hoverColor: "#8d6e63"}
  ];

  if(colors && colors.length != 0 && target.data.length <= colors.length) {
    
    target.backgroundColor.length = 0;
    target.hoverBackgroundColor.length = 0;
    target.data.forEach(function( value, index ) {

      target.backgroundColor.push(colors[index].color);
      target.hoverBackgroundColor.push(colors[index].hoverColor);
    });
  } else {
    alert('Insufficient colors');
  }
}