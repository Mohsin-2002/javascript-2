
// Alert Name
document.getElementById("alertname").onclick = function () {
    let fullName = "Mohsin Ali"

    alert(fullName)

    let statement = ("alert('Mohsin Ali')")
    document.getElementById("statement").innerHTML = statement;
}

// Alert Number

document.getElementById("alertnumber").onclick = function () {

    alert(123)

    let statement = "alert(123)"
    document.getElementById("statement").innerHTML = statement;
}

// Variable Names

document.getElementById("variablenames").onclick = function () {

    let html = "<ul><li>A variable name can't contain any space.</li><li>A variable name can contain letters, digits, underscores, and dollar signs.</li><li>Though a variable name can't be any of Javascript's keywords. It contains keywords. For Example, <code>userAlert</code> and <code>myVar</code> are legal.</li><li>Capital letters are fine but be carefull. Variable name are case senstive. A <code>rose</code> is not a <code>Rose</code>. If you assign the string 'Floribundas' to the variable <code>rose</code>, and then ask Javascript for the value assigned to <code>Rose</code>,you'll come up empty.</li></ul>"

    document.getElementById("output").innerHTML = html;
}

// camelCase

document.getElementById("camelCase").onclick = function () {

    let html = "<h3>Examples</h3><ul><li><code>user</code></li><li><code>userResponse</code></li><li><code>useerResponseTime</code></li><li><code>userResponseTimeLimit</code></li></ul>"

    document.getElementById("output").innerHTML = html;
}

// Sum 2 Numbers

document.getElementById("sum2Numbers").onclick = function () {

    let num1 = 30;
    let num2 = 10;
    let sum = num1 + num2;

    let statement = "let num1 = " + num1 + ";<br> let num1 = " + num2 + ";<br> let sum = num1 + num2;"
    document.getElementById("statement").innerHTML = statement;

    document.getElementById("output").innerHTML = "<p class='text-center'>" + sum + "</p> "
}

// Subtract 2 Numbers

document.getElementById("subtract2Numbers").onclick = function () {

    let num1 = 30;
    let num2 = 10;
    let subtract = num1 - num2;

    let statement = "let num1 = " + num1 + ";<br> let num1 = " + num2 + ";<br> let subtract = num1 - num2;"
    document.getElementById("statement").innerHTML = statement;

    document.getElementById("output").innerHTML = "<p class='text-center'>" + subtract + "</p> "
}

// Multiply 2 Number

document.getElementById("multiply2Numbers").onclick = function () {

    let num1 = 30;
    let num2 = 10;
    let multiply = num1 * num2;

    let statement = "let num1 = " + num1 + ";<br> let num1 = " + num2 + ";<br> let multiply = num1 * num2;"
    document.getElementById("statement").innerHTML = statement;

    document.getElementById("output").innerHTML = "<p class='text-center'>" + multiply + "</p> "
}

// Divide 2 Number

document.getElementById("divide2Numbers").onclick = function () {

    let num1 = 30;
    let num2 = 10;
    let divide = num1 / num2;

    let statement = "let num1 = " + num1 + ";<br> let num1 = " + num2 + ";<br> let divide = num1 / num2;"
    document.getElementById("statement").innerHTML = statement;

    document.getElementById("output").innerHTML = "<p class='text-center'>" + divide + "</p> "
}

// Calculate Some Numbers

document.getElementById("calculateNumbers").onclick = function () {

    let calculate = 30 / 5 * 3 + 2 ** 4 - (3 + 2);

    let statement = "let calculate = 30 / 5 * 3 + 2 ** 4 - (3 + 2)"
    document.getElementById("statement").innerHTML = statement;

    document.getElementById("output").innerHTML = "<p class='text-center'>" + calculate + "</p> "
}


// Clear Statement

document.getElementById("clearstatement").onclick = function () {

    document.getElementById("statement").innerHTML = " ";
    
}


// Clear Output

document.getElementById("clearoutput").onclick = function () {

document.getElementById("output").innerHTML = " ";

}
