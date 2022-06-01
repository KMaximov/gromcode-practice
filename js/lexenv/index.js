// GLOBAL LEX ENV
// {
//   'enviromentRecord': {
//     'message': 'Test',
//     'weight': 55,
//     'run': {
//         console.log('RUN');
//      },
//      'createMessenger': { ..},
//      'messanger': ....
//   },
//   'outherLexicalEnv': null
// }

const message = 'Test';
const weight = 55;

function run() {
  console.log('RUN');
}

// if(false) {
//     function sum(a, b) {
//         return a + b;
//     }
// }

// createMessenger() LEX ENV  {
//   'enviromentRecord': {
//    'message',
//    'sender',       
//    'sendMessage',
//    'setSender',
//    'setMessage',
//   },
//   'outherLexicalEnv': global
// }

// run() LEX ENV {
// 
//}
//   'outherLexicalEnv': global
// }

function createMessenger() {
  let message = 'Just learn it';
  let sender = 'Gromcode';

  function sendMessage(name) {
    console.log(`${name}, ${message}! Your ${sender}`);
  }

  function setSender(newSender) {
    sender = newSender;
  }

  function setMessage(text) {
    message = text;
  }

//   sendMessage('Jack');
  return {
    sendMessage,
    setMessage,
    setSender,
  };
}

createMessenger();
// const messanger = createMessenger();
// messanger.sendMessage('Ann');
// run();

// const messager1 = createMessenger();
// messager1.setSender = 'one';
// messager1.setMessage = 'Hi';

