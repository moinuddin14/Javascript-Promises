const p1 = Promise.resolve('Hello World');
const p2 = 10;
const p3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, 'Goodbye');
})
const p4 = Promise.reject('Error...');

Promise.all([
    p1, p2, p3
]).then(values => {
    let output = '';
    values.forEach(value => {
        output += `<li>${value}</li>`
    })
    document.getElementById('display').innerHTML = output;
});