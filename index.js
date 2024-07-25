fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => {
        let users = document.getElementById('users');

        data.forEach(element => {
            let user = document.createElement('option');
            user.innerHTML = element.name;
            users.appendChild(user);
        });
    });

document.getElementById('btn').addEventListener('click', () => {
    let users = document.getElementById('users');
    let selectedUserName = users.options[users.selectedIndex].text;
    let p = document.getElementById('para');
    let name = document.createElement('p');
    p.innerHTML = "";
    name.innerHTML = `User chosen is ${selectedUserName}`;
    p.appendChild(name);
});
