
var m=70;
var r;
if (m<0 || m>100){r="invalid input"}
else if (m>=0 && m<50) {
  r = "the mark will be FAIL";
} else if (m>=50 && m<=59) {
 r = "the mark will be D";
} 
else if (m>=60 && m<=69) {
    r = "the mark will be C";
   } 
   else if (m>=70 && m<=79) {
    r = "the mark will be B";
   } 
   else if (m>=80 && m<=89) {
    r = "the mark will be A";
   } 
         
   else if (m>=90 && m<=100) {
    r = "the mark will be A+";
   } 
   document.write(r);
