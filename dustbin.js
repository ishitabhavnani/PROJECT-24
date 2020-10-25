class Dustbin{
    constructor(x,y,width,height){
        
        this.width=width;
        this.height=height;
        this.myRectBody=Bodies.rectangle(x,y,width,height, {isStatic:true});
        

        World.add(myWorld , this.myRectBody);
        
    }
    display(){
        push();  ///save my settings before translation
        rectMode (CENTER);
        fill("yellow")
        rect(this.myRectBody.position.x,this.myRectBody.position.y,this.width, this.height);
        pop(); //go back to my previous settings
    }
}