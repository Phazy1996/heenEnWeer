window.addEventListener("load",function(){ 
	var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
    
    
    var mouse = utils.captureMouse(canvas);
    var A = new Point(100,100,20,"#ff0000",mouse);
    var B = new Point(700,200,20,"#0000ff",mouse);
    
    
    (function animateCanvas(){
        context.clearRect(0,0,800,450); 
        window.requestAnimationFrame(animateCanvas);
        A.update();
        A.draw(context);
        B.update();
        B.draw(context);
    })()
});


