const urlInput = document.querySelector('#input');
const sendUrlButton = document.querySelector('#send-url');
const forwardingButton = document.querySelector('#forwarding-button');

let urlFromUser = '';

function getForwardingLink() {
    return urlFromUser.indexOf('http') === -1 ? `https://${urlFromUser}` : urlFromUser;
}

sendUrlButton.addEventListener('click', (e) => {
    e.preventDefault();
    urlFromUser = urlInput.value;
});

forwardingButton.addEventListener('click', (e) => {
    window.location.href = getForwardingLink();
});