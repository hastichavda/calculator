var exp = '',number,decimal,equal,operator,allowSR = true;
var textview = document.forms['myForm']['textview'];

function insertNum(num){
    if(equal){
        exp = num;
        textview.value= exp;
        number = true;
        equal =false;
    }
    else{
        exp = textview.value + num;
        textview.value = exp;
        number = ture;
    }
    if(operator) decimal= false;
    //SR('a');
}
function insertOp(op)
{
    textview.value = exp + op;
    operator = true;
    equal = false;
    allowSR = false;
    //SR('a');
}



function equalTo(){
    if(exp){
        exp = eval(exp);
        textview.value = exp;
        equal = true;
        decimal= false;
        number= false;
        allowSR= true;
        //SR('a');
    }
}
function clean(){
    exp = '';
    textview.value = exp;
    decimal = false;
}
function back(){
    exp = textview.value;
    exp = exp.substring(0,exp.length-1);
    textview.value = exp;
}

function square()
{
    let ans = exp*exp;
    textview.value=ans;
}