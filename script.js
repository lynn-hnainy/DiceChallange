window.onload = function afterWebPageLoad() { 
    img_src="images/dice";
    //generate a number from 1 to 6
    var number1=Math.floor(Math.random()*6)+1;
    var number2=Math.floor(Math.random()*6)+1;
    //console.log(number1);
    //console.log(number2); 
    img_src1=img_src+number1;
    img_src2=img_src+number2;
    console.log(img_src1);
    console.log(img_src2);
}