document.addEventListener('DOMContentLoaded', function() {
    // DOM elements
    const welcomeMessageButton = document.querySelector('#welcomeMessageButton');
    const addNumbersButton = document.querySelector('#addNumbersButton');
    const multiplyByTwoButton = document.querySelector('#multiplyByTwoButton');
    const addFiveButton = document.querySelector('#addFiveButton');
    const submitUserInfoButton = document.querySelector('#submitUserInfoButton');
    const arrowFunctionButton = document.querySelector('#arrowFunctionButton');
    const setTimeoutButton = document.querySelector('#setTimeoutButton');
    const spreadOperatorButton = document.querySelector('#spreadOperatorButton');
    const destructuringButton = document.querySelector('#destructuringButton');
    const templateLiteralsButton = document.querySelector('#templateLiteralsButton');
    const messagesDiv = document.querySelector('#messages');

    // Utility function to append messages
    function appendMessage(message) {
        const p = document.createElement("p");
        p.textContent = message;
        messagesDiv.appendChild(p);
    }

    // Welcome message
    welcomeMessageButton.addEventListener('click', () => {
        appendMessage("Welcome to my website showcasing JavaScript knowledge!");
    });

    // Basic Operations
    addNumbersButton.addEventListener('click', () => {
        appendMessage(`5 + 10 = ${5 + 10}`);
    });

    multiplyByTwoButton.addEventListener('click', () => {
        const multiplyByTwo = num => num * 2;
        appendMessage(`5 * 2 = ${multiplyByTwo(5)}`);
    });

    addFiveButton.addEventListener('click', () => {
        function addFive(num) { return num + 5; }
        appendMessage(`10 + 5 = ${addFive(10)}`);
    });

    // User information submission
    submitUserInfoButton.addEventListener('click', () => {
        const nameInput = document.querySelector('#name');
        const ageInput = document.querySelector('#age');
        const genderSelect = document.querySelector('#gender');

        const userInfo = {
            name: nameInput.value,
            age: ageInput.value,
            gender: genderSelect.value,
        };

        appendMessage(`User Info: Name - ${userInfo.name}, Age - ${userInfo.age}, Gender - ${userInfo.gender}`);
    });

    // Advanced JavaScript Concepts
    arrowFunctionButton.addEventListener('click', () => {
        const square = x => x * x;
        appendMessage(`Square of 4 is ${square(4)}`);
    });

    setTimeoutButton.addEventListener('click', () => {
        setTimeout(() => {
            appendMessage("This message is shown after 2 seconds.");
        }, 2000);
    });

    spreadOperatorButton.addEventListener('click', () => {
        const numbers = [1, 2, 3];
        const newNumbers = [...numbers, 4, 5];
        appendMessage(`Original numbers: [${numbers.join(', ')}], New numbers with spread operator: [${newNumbers.join(', ')}]`);
    });

    destructuringButton.addEventListener('click', () => {
        const user = { name: "Jane", age: 28 };
        const { name, age } = user;
        appendMessage(`Destructuring Assignment: Name - ${name}, Age - ${age}`);
    });

    templateLiteralsButton.addEventListener('click', () => {
        const personName = 'John';
        const personAge = 30;
        appendMessage(`Template Literals: Hello, my name is ${personName} and I am ${personAge} years old.`);
    });
});
