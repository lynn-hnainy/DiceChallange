window.onload = function afterWebPageLoad() { 
    img_src="images/dice";
    //generate a number from 1 to 6
    var number1=Math.floor(Math.random()*6)+1;
    var number2=Math.floor(Math.random()*6)+1;
    //console.log(number1);
    //console.log(number2); 
    img_src1=img_src+number1+".png";
    img_src2=img_src+number2+".png";
    console.log(img_src1);
    console.log(img_src2);
    var img1=document.getElementsByClassName("img1");
    var img2=document.getElementsByClassName("img2");
    img1[0].src=img_src1;
    img2[0].src=img_src2;
}