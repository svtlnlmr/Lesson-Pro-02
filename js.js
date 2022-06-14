function task1Numbers() {
    const num = 5188;
    const numBinary = num.toString(2);
    const numHexadecimal = num.toString(16);
    console.log(`5188 in binary system = ${numBinary};\n5188 in hexadecimal system = ${numHexadecimal};`);
}

function task2Numbers() {
    const num = +prompt('Please enter your number');
    console.log(`You entered number ${num}`);
    console.log(`Addition result (${num} + 2) = ${num + 2}`);
    console.log(`Subtraction result (${num} - 2) = ${num - 2}`);
    console.log(`Multiplication result (${num} * 2) = ${num * 2}`);
    console.log(`Division result (${num} / 2) = ${num / 2}`);

}

function task3Numbers() {
    const num = prompt('Please enter your number');
    console.log(`String length = ${num.length}`);

}

function task4Numbers() {
    const num = 0.51000002;
    console.log((num + 2).toFixed(2));
}

function task1Strings() {
    const str = 'the quick brown fox jumps over the lazy dogs back';
    const str_two = 'brown fox jumps';
    console.log(str.indexOf(str_two));
    console.log(str_two.toUpperCase());
}

function task1LogicalOperations() {
    // сравните a c b, b c c, c c d и результаты между собой таким ображом чтобы получить true используя ИЛИ не используя НЕ
    const a = 1, b = 2, c = 3, d = 3;
    const acb = (a === b || b === c); // false
    const bcc = (b === c || c === c);// true
    const ccd = (c === c || c === d);// true

    console.log(acb || bcc || ccd); // true
}

function task2LogicalOperations() {
    // сравните a c b, b c c, c c d и результаты между собой таким ображом чтобы получить true используя И не используя НЕ
    const a = 1, b = 2, c = 3, d = 3;
    const acb = (a < b && b < c); // true
    const bcc = (b < c && c >= 3);// true
    const ccd = (c >= 3 && c === d);// true

    console.log(bcc && ccd && acb); // true
}

function lastTask() {
    const a = '33', b = 33;
    let z;
    console.log(a === b);
    console.log(a == b);
    console.log(a ?? 'nothing');
    console.log(z ?? 'nothing');
}