'use strict';

function waitFor(element, eventName) {
  return new Promise((resolve) => {
    element.addEventListener(
      eventName,
      () => {
        resolve(
          `It was ${eventName} on the element: ${element.nodeName}, id: ${element.id}.`,
        );
      },
      { once: true },
    );
  });
}

function printMessage(message) {
  const messageElement = document.createElement('div');

  messageElement.className = 'message';
  messageElement.textContent = message;

  document.body.append(messageElement);
}

const login = document.querySelector('#login');
const password = document.querySelector('#password');

waitFor(login, 'click').then(printMessage);
waitFor(password, 'input').then(printMessage);
