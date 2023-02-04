/*
function feetToinch(feet){
    const inchs=feet*12;
    return inchs;
}
console.log(feetToinch(7));
*/
/*
function centimeterToMeter(centimeter){
    const meter=centimeter/100;
    return meter;
}
const totalMeter=centimeterToMeter(100);
console.log(totalMeter,'Meter');
*/
/*
function paperRequirements(num1,num2,num3){
    let book1=100;
    let book2=200;
    let book3=300;
    const book1paper=num1*book1;
    const book2paper=num2*book2;
    const book3paper=num3*book3;
    const TotalPaper=book1paper+book2paper+book3paper;
    console.log(TotalPaper);
}
paperRequirements(3,3,3,);
*/
/*
var Name=['anik','sojib','asraful']
function bestFriend(names){
    let closeFriend=[0];
    for(let i=0;i<names.length;i++){
        const element=names[i];
        if(element.length>closeFriend.length){
            closeFriend=element;
        }
    }
    return closeFriend;
}
const myFriend=bestFriend(Name);
console.log(myFriend);
*/
let Number=[45,67,32,56,54,-45,67]
let num=[];
for(let i=0;i<Number.length;i++){
    const element=Number[i];
    if(element>= 0){
        num.push(element);
    }
    else if(element<0){
        break;
    }
}
console.log(num)