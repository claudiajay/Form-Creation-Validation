// Define an async function to fetch user data
async function fetchUserData() {
  // Define the API URL
  const apiUrl = "https://jsonplaceholder.typicode.com/users";

  // Select the data container element
  const apiDataContainer = document.getElementById("api-data");

  try {
      // Fetch data from API
      const response = await fetch(apiUrl);
      const users = await response.json();

      // Clear the loading message
      apiDataContainer.innerHTML = "";

      // Create a <ul> element
      const userList = document.createElement("ul");

      // Loop through users and create <li> elements
      users.forEach(user => {
          const listItem = document.createElement("li");
          listItem.innerHTML = `<strong>${user.name}</strong><br>Email: ${user.email}<br>Phone: ${user.phone}`;
          userList.appendChild(listItem);
      });

      // Append userList to apiDataContainer
      apiDataContainer.appendChild(userList);
  } catch (error) {
      // Handle errors and display a message
      apiDataContainer.innerHTML = `<p style="color: red;">Failed to load user data.</p>`;
      console.error("Error fetching data:", error);
  }
}

// Invoke fetchUserData when DOM is loaded
document.addEventListener("DOMContentLoaded", fetchUserData);
