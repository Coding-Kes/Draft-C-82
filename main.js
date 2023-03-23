
var mouseEvent = "empty";
var last_positon_of_x, last_positon_of_y;
var current_positition_of_mouse_x, current_positition_of_mouse_y;

canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

color = "black";
width_of_line = 3;


canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e)

{
    color = document.getElementById("color").value;
    width_of_line = document.getElementById("width_of_line").value;

    mouseEvent = "mousedown"
}

canvas.addEventListener("mouseleave", my_mouseleave);

function my_mouseleave(e)

{
    mouseEvent = "mouseleave"
}

canvas.addEventListener("mouseleave", my_mouseleave);

function my_mouseleave(e)

{
    mouseEvent = "mousedown"
}

canvas.addEventListener("mouseup", my_mouseup);

function my_mouseup(e)

{
    mouseEvent = "mouseUP"
}

   
    canvas.addEventListener("mouseleave", my_mouseleave);

    function my_mouseleave(e)

    {
        mouseEvent = "mouseleave"
    }



        canvas.addEventListener("mousemove", my_mousemove);

        function my_mousemove(e)

{
    current_positition_of_mouse_x = e.clientX - canvas.offsetLeft;
    current_positition_of_mouse_y = e.clientY - canvas.offsetTop;

if (mouseEvent == "mousedown")
{
ctx.beginpath();
ctx.strokestyle = color;
ctx.lineWidth = width_of_line;

console.log("Last position of x and y coordinates = ");
console.log("x = " + last_positon_of_x + "y = " + last_positon_of_y);
ctx.moveTo(last_positon_of_x, last_positon_of_y)

console.log("Current position of x and y coordinates = ");
console.log("x = " + current_positon_of_x + "y = " + current_positon_of_y);
ctx.moveTo(current_positon_of_x, current_positon_of_y)
}

last_positon_of_x = current_positition_of_mouse_x
last_positon_of_y = current_positition_of_mouse_y

}

console.log("Last position of x and y coordinates = ");
console.log("x = " + last_positon_of_x + "y = " + last_positon_of_y);

console.log("Current position of x and y coordinates = ");
console.log("x = " + current_positon_of_x + "y = " + current_positon_of_y);

function clearArea()
{
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.cavas.height)
}
















