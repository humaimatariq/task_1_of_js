function converter() {
    let i1 = document.getElementById('age').value;
    i1 = Number(i1);
    if (i1 == "") {
        alert("Field is Empty Enter Age");
    }

    else if (isNaN(i1)) {
        document.getElementById("r1").innerHTML = `Invalid `
    }
    else if (i1 < 0) {  //Math.sign(i1)==-1
        document.getElementById("r1").innerHTML = `Number is negative`
    }
    else {
        const daysInYear = 365;
        const a = i1 * daysInYear;
        const b = i1 / 4;
        const days = a + b;
        document.getElementById("r1").innerHTML = `Your age in Days is ${days}`
    }

}
function convert() {
    let i2 = document.getElementById('hour').value;
    if (i2 == "") {
        alert("Field is Empty Enter Hours");
    }
    else if (isNaN(i2)) {
        document.getElementById("r2").innerHTML = `Invalid`
    }
    else if (i2 < 0) {  //Math.sign(i1)==-1
        document.getElementById("r2").innerHTML = `Number is negative`
    }
    else {
        const hoursInSeconds = 3600;
        const seconds = i2 * hoursInSeconds;
        document.getElementById("r2").innerHTML = `Entered Days in seconds are ${seconds}`
    }
}
function nextNum() {
    let f = document.getElementById('num').value;

    if (f === "") {
        alert("Field is Empty,enter number to find next in array");
    }
    else {
        const ff = f.split("");
        const fff = ff[ff.length - 1] ;
        const second=Number(fff)+Number(1);
         document.getElementById("r3").innerHTML = second;
        console.log(second);
    }
}

function capital() {
    let n = document.getElementById("nam").value;
    if (n == "") {
        alert("Field is Empty");
    }
    else if (!isNaN(n)) {
        document.getElementById("r5").innerHTML = "Invalid";
    }
    else {
        const words = n.split(" ");
        for (let i = 0; i < words.length; i++) {
            words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
        }
        const result = words.join(" ");
        document.getElementById("r5").innerHTML = result;
    }
}

function bmi() {
    let weight = document.getElementById("w").value;
    let height = document.getElementById("h").value;
    if (weight === "" || height === "") {
        alert("Field is Empty");
    }

    else {
        hei = height * 0.01;
        const BMI = weight / (hei * hei);
        document.getElementById("r6").innerHTML = BMI;
    }

}

function randomarray(min, max) {
    const ar = new Array(10);
    const n = 10;
    for (i = 0; i < 10; i++) {
        ar[i] = Math.round((Math.random() * (max - min) + min));

    }
    console.log(ar);
    document.getElementById("r7").innerHTML = ar.join();
    document.getElementById("firstindex").innerHTML = ar[0];
    document.getElementById("lastindex").innerHTML = ar[n - 1];
}
function test() {
    let x = document.getElementById("a").value;
    let y = document.getElementById("b").value;
    if (x == "") {
        alert("Field is Empty");
    }
    else if (isNaN(x)) {
        document.getElementById("res").value = "NaN";
    }
    else {
        const z = Number(x) + Number(y);
        document.getElementById("res").value = z;
    }
}
