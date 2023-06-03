var a = +prompt("Birinchi Soni Kiriting")
var b = +prompt("Ikkinchi Soni Kiriting")
var c = +prompt("Uchunchi Soni Kiriting")

if (a > b && a < c || a < b && a > c) {
    alert(a)
}

else if (b > a && b < c || b < a && b > c) {
    alert(b)
}

else if (c < a && c > b || c > a && c < b) {
    alert(c)
}
else {
    alert("Xatolik")
}
