function messagePass() {
    var uname = document.querySelector('#uname').value;
    let username = uname;

    let target = document.querySelector('.msg-result');
    target.innerHTML = `<b>${username}</b>`;

    let form = document.querySelector('#form');

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        form.reset();

    });

}