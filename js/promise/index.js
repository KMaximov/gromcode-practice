const formElem = document.querySelector('.login-form');
const serverUrl = 'https://6272c6bfa6522e24ac3e537b.mockapi.io/v1/users';


function createUserHandler (event) {
    event.preventDefault();
    console.log('hi')
}

const user = {
    email: 'test@gmail.com',
    name: 'Mykola',
    password: '123',
}

console.log(JSON.stringify(user)); // знаходиться строка в JSON вигляді завжди

const promise = fetch(serverUrl, { // input: url, options; output: promise(always)
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
}); // promise.then() --- input: callback(optional), callback(optional); output: promise;(пишемо або на resolve або на reject);
    // then.callback --- input: результат минулого проміса; output: any(будь що но сам then оберне результат в promise(щоб не вернули в колбеці - оберне в проміс)
    // проміс створений для того щоб обернути асинхронний код
    promise.then(response => { //response = результат колбек функції resolve /catch = результат колбек функції reject
        console.log('response is here')
        // console.log(response); // response - у вигляді об"єкта
        // console.log(response.body); // ReadableStream {locked: false} - об"єкт в який обертається 
        // console.log(response.json()); // json - зчитує Stream(що зверху);
        // response.json() // input: none, output: promise //якщо щось отримуємо через якийсь час - це проміс
        return response.json(); // 
    })
    .then(body => {
        console.log('body is read')
        alert(body); //alert input: string; output: undefined;
    })

formElem.addEventListener('submit', createUserHandler) // правильно робити сабміт подію на реєстрацію
