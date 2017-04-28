var a = 1; b = 1;
var c = 0;
document.write( a + "<br> ");
document.write( b +"<br>" );
for (i=1;i<=13;i++) {
c=b+a;
document.writeln (c+"<br>");
a=b;
b=c;

}
