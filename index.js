console.log("=========================page 18, ex.5=========================")

var num1 = Number(prompt("This is for page 18 ex. 5. Please enter your first number"))
var num2 = Number(prompt("This is for page 18 ex. 5. Please enter your second number"))

if (num1 >= num2) {
    console.log("1)" + num2 + " 2)" + num1)
} else {
    console.log("1)" + num1 + " 2)" + num2)
}

console.log("=========================page 20, ex.4=========================")

var c = Number(prompt("This is for page20 ex. 4. Please enter a number between 1-9999"))

if (c >= 1 && c < 10) {
    console.log("1")

} else if (c >= 10 && c < 100) {
    console.log("2")

} else if (c >= 100 && c < 1000) {
    console.log("3")

} else if (c >= 1000 && c < 10000) {
    console.log("4")

} else (console.log("number invalid"))

console.log("=========================page 20, ex.4 option 2=========================")

var C = Number(prompt("This is for page 20 ex. 4 option number 2. Please enter a number between 1-9999"))
var i = 1

if (1 <= C < 10000) {

    while (parseInt(C / 10) != 0) {
        i = i + 1
        C = parseInt(C / 10)
    }
    console.log(i)

} else {

    console.log("number invalid")

}

console.log("=========================page 27, ex.2=========================")

var d = Number(prompt("This is for page 27 ex. 2. Please enter your first number"))
var e = Number(prompt("This is for page 27 ex. 2. Please enter your second number"))

while (d <= e) {
    console.log(d);
    d++;
}

console.log("=========================page 27, ex.3=========================")

var f = Number(prompt("This is for page 27 ex. 3. Please enter your number"))
var I = 0

while (I <= f) {

    if (I % 2 == 0) {
        console.log(I)
    }
    I = I + 1

}

console.log("=========================page 27, ex.5=========================")

var g = Number(prompt("please enter a non negative number, if you want to stop write -99"))
var sum = 0

while (g != -99) {

    if (g > 0) {

        sum = sum + g
        
    }

    g = Number(prompt("please enter a non negative number, if you want to stop write -99"))
    
}

console.log(sum)
