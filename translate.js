/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var $ = function(id){
    return document.getElementById(id);
};
window.onload = function (){
    $("btnDecode").onclick=fnDecode ;
    $("btnEncode").onclick=fnEncode ;
    $("btnClear").onclick= fnClear ;
};
function fnDecode() {
    var msg = $("textin").value;
    if (msg === ""){
        $("textin_span").innerHTML = "*Please enter a message to Decode*";
        $("textin").focus();
        return;
    } else {
        $("textin_span").innerHTML  = "";
    }
    var nums = msg.split(","); 
    var outstr = "";
    for(var i=0; i < nums.length; i++){
        var n2 = parseInt(nums[i]);
        if (isNaN(n2)){
            outstr += "?";   
        } else if  (isNallN(nums[i])){
            outstr += "?"; 
        }else if(n2 === 0){
            outstr += " ";
        } else if (n2 < 1 || n2 > 26) {
            outstr += "?";
        }else {
            outstr += String.fromCharCode(n2+64);
        }
    }
    $("textout").value = outstr;
}
function isNallN(){
    //parse string to check that all characters are digits...
}
function fnEncode(){
    var msg = $("textin").value.toUpperCase();
   $("textin").value =msg;
   var msg = $("textin").value;
if (msg === ""){
   $("textin_span").innerHTML = "*Please enter a message to Encode*";
   $("textin").focus();
   return;
} else {
   $("textin_span").innerHTML = ""; }
   var outstr = "";
   var c;
   for (var i=0; i<msg.length; i++) {
       c = msg.charAt(i);
       if (c === ' ') 
       {
           if(i < msg.length-1)
               outstr = outstr + 0+" ";
           else  
               outstr = outstr + 0;
       }else if(c >= 'A' || c<='Z')
       {
           if(i < msg.length-1)
               outstr = outstr + (msg.charCodeAt(i) - 65 + 1) + " ";
           else
               outstr = outstr + (msg.charCodeAt(i) - 65 + 1) + "";
       }else 
       {
           if(i < msg.length-1)
               outstr = outstr + 99 + " ";
           else
               outstr = outstr + 99 + "";
       }  
   }
   $("textout").value = outstr;
}

function fnClear(){
$("form1").reset();
$("textin").innerHTML = "";
$("textin").focus();
}
