let n1 = 0;
let n2 = 1;
let next;

var result = document.getElementById('result');

for (let i = 1; i <= 10; i++) {
    result.innerHTML += n1 + "<br>";
    next = n1 + n2;
    n1 = n2;
    n2 = next;
}