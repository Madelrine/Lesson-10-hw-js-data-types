var a = 30;
document.write("var a = 30" + " " + "is typeof" + " " + typeof a + "<br/>");
var person = "Victor Panamarciuc";
document.write("var person = \"Victor Panamarciuc\"" + " " + "is typeof" + " " + typeof person + "<br/>");
var login = true;
document.write("var login = true" + " " + "is typeof" + " " + typeof login + "<br/>");
var animal;
document.write("var animal" + " " + "is typeof" + " " + typeof animal + "<br/>");
var books = ["html", "css", "javascript"];
document.write("var books = [\"html\", \"css\", \"javascript\"];" + " " + "is typeof" + " " + typeof books + "<br/>");
var x = null;
document.write("var x = null" + " " + "is typeof" + " " + typeof x + "<br/>");

var myCurrentAge = 30;
var result;
if (myCurrentAge >= 25) {
    document.write("<h3>I am over  25 years old</h3>")
} else {
    document.write("<h3>I am under 25</h3>")
}
var result = (myCurrentAge >= 25) ? "<h3>I am over 25 years old</h3>" : "<h3>I am under 25</h3>"
document.write(result);