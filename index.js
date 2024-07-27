fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => {
        let users = document.getElementById('users');

        data.forEach(element => {
            let user = document.createElement('option');
            user.value = JSON.stringify({
                username: element.username,
                email: element.email
            });
            user.innerHTML = element.name;
            users.appendChild(user);
        });
    });

document.getElementById('btn').addEventListener('click', () => {
    let users = document.getElementById('users');
    let table = document.querySelector('#usersTable tbody');
    let row = document.createElement('tr');
    let nameCell = document.createElement('td');
    let unCell = document.createElement('td');
    let emailCell = document.createElement('td');
    let selectedUserName = users.options[users.selectedIndex].text;
    let selectedUserData = JSON.parse(users.options[users.selectedIndex].value);

    nameCell.innerHTML = selectedUserName;
    unCell.innerHTML = selectedUserData.username;
    emailCell.innerHTML = selectedUserData.email;
    row.appendChild(nameCell);
    row.appendChild(unCell);
    row.appendChild(emailCell);
    table.appendChild(row);
});

