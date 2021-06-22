function square(length){
    return length*length;
}

function rectangle(width,height){
    return width*height;
}

function circle(radius){
    return 3.14*radius*radius;
}


module.exports={

    square:square,
    rectangle:rectangle,
    circle:circle
}