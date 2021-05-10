const container = document.querySelector(".container");
const input = document.querySelector("input");
const button = document.querySelector(".button");
let user = [];
const createProfile = (array) => {
    container.innerHTML = "";
    array.forEach((obj) => {
        const profile = document.createElement("div");
        profile.classList.add("profile");
        profile.innerHTML = `<div class="name">Name</div>
        <div class="name-content">${obj.username}</div>
        <div class="email">Email</div>
        <div class="email-content">${obj.email}</div>`;
        container.appendChild(profile);
    })
};
fetch("https://jsonplaceholder.typicode.com/users")
    .then((data) => {
        return data.json()
    })
    .then((final) => {
        user = final;
        createProfile(user)
    })
input.addEventListener("input", (event) => {
    event.preventDefault()
    const search = event.target.value.toLowerCase()
    const filter = user.filter((inp) => {
        return (
            inp.username.toLowerCase().includes(search) ||
            inp.email.toLowerCase().includes(search)
        )
    })
    createProfile(filter)
})