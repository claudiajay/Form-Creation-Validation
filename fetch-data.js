document.addEventListener("DOMContentLoaded", () => {
    const apiDataContainer = document.getElementById("api-data");

    fetch("https://jsonplaceholder.typicode.com/users") // Example API
        .then(response => response.json())
        .then(users => {
            const userList = document.createElement("ul");

            users.forEach(user => {
                const listItem = document.createElement("li");
                listItem.innerHTML = `${user.name}`;
                userList.appendChild(listItem);
            });

            apiDataContainer.innerHTML = ""; // Clear placeholder text
            apiDataContainer.appendChild(userList);
        })
        .catch(error => {
            apiDataContainer.innerHTML = `<p style="color: red;">Failed to load user data.</p>`;
            console.error("Error fetching data:", error);
        });
});
