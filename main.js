document.getElementById('fetch-button').addEventListener('click', fetchNewUsers);

function fetchNewUsers() {
    fetch('https://randomuser.me/api/?results=5')
        .then(response => response.json())
        .then(data => updateUsers(data.results))
        .catch(error => console.error('Error fetching users:', error));
}

function updateUsers(users) {
    for (let i = 0; i < users.length; i++) {
        const user = users[i];
        const userDiv = document.getElementById(`user${i + 1}`);
        userDiv.innerHTML = `
            <p>Name: ${user.name.first} ${user.name.last}</p>
            <p>Email: ${user.email}</p>
            <p>Location: ${user.location.city}, ${user.location.country}</p>
            <img src="${user.picture.thumbnail}" alt="User picture">
        `;
    }
}
