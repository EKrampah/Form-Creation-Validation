document.addEventListener("DOMContentLoaded", function () {
    async function fetchUserData () {
    
    const apiUrl = "https://jsonplaceholder.typicode.com/users"
    const dataContainer = document.getElementById("api-data")

    try {
    const response = await fetch(apiUrl);
    const users = await response.json();
    dataContainer.innerHTML = " ";
    const userList = document.createElement("li");
    
    users.forEach(user => {
        const listItem = document.createElement("li")
        listItem.textContent = user.name
        userList.appendChild(listItem);
    });

    dataContainer.appendChild(userList);
    }

    catch (errror) {
        dataContainer.innerText = " ";
        dataContainer.textContent = "failed to load user data";
    }
}
    fetchUserData();
})