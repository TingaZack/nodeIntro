function greet(name) {
    console.log(`hello: `, name);
}

function greetZak(greetFn) {
    const name = "ZAk";
    greetFn(name);
}

greetZak(greet);