function userInfo() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => allUser(data));
}
function allUser(data) {
    const ul = document.getElementById('users');
    for (user of data) {
        const li = document.createElement('li');
        li.innerText = `Name: ${user.name} Email: ${user.email}`;
        ul.appendChild(li);
    }
}