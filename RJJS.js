
//EMI = [P x R x (1+R)^N]/[(1+R)^N-1], where P stands for the loan amount or principal, 
//R is the interest rate per month [if the interest rate per annum is 11%, then the rate of interest will be 11/(12 x 100)], 
//and N is the number of monthly instalments. When you use the above formula, you will get the same result that you will get 
//in the Excel spreadsheet.



var App = {

MYEMI:  function(){
    var P = document.getElementById('InputAmount').value;
    var M = (document.getElementById('Inputmonths').value)/12;
    var S = (document.getElementById('Inputinterest').value);
//var I = (P*M*R)/1200;

var R =1+(S/100);
var Z = Math.pow(R,M);
var B = Z+1;
var C = (Z-1);
 var A = (P*S)/1200;
 var emi = (A*B)/C;
parseFloat(document.getElementById("emi").innerHTML = emi);

}
}
 
