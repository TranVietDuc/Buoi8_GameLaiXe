var leftPos = 150;
var topPos = 150;
function  car(left,top)
{
    this.left = left;
    this.top = top;
    this.carMove = function (leftPos, topPos)
    {
        let c = document.getElementById("myCanvas");
        let ctx = c.getContext("2d");
        let img = document.getElementById("car");
        ctx.drawImage(img, leftPos, topPos, 75, 75);
    };
}
var myCar = new car(leftPos,topPos);
myCar.carMove(leftPos,topPos);
function leftArrowPressed()
{
    leftPos -= 10;
    myCar.carMove(leftPos,topPos);
}
function rightArrowPressed()
{
    leftPos += 10;
    myCar.carMove(leftPos,topPos);
}
function upArrowPressed()
{
    topPos -= 10;
    myCar.carMove(leftPos,topPos);
}
function downArrowPressed()
{
    topPos += 10;
    myCar.carMove(leftPos,topPos);
}

function moveSelection(evt){
    switch (evt.keyCode) {
        case 37:
            leftArrowPressed();
            break;
        case 39:
            rightArrowPressed();
            break;
        case 38:
            upArrowPressed();
            break;
        case 40:
            downArrowPressed();
            break;
    }
}
function docReady(){
    window.addEventListener('keydown',moveSelection);
}
