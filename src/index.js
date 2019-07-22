import readlineSync from 'readline-sync';

const sayWelcome = () => {
    console.log('Welcome to the Brain Games!');
}

const askName = () => {
    const name = readlineSync.question('May I have your name? ');
    console.log(`Hello ${name}`);
}

export { sayWelcome, askName };