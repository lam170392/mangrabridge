import {userProfileCard} from "./userProfileCard.js";

const avatar = document.querySelector('.avatar');
const menu = document.querySelector('.menu__list');

avatar.addEventListener('click', () => {
    menu.classList.toggle('hidden');
});

document.addEventListener('click', (e) => {
    if (!avatar.contains(e.target) && !menu.contains(e.target)) {
        menu.classList.add('hidden');
    }
});




const users = [
    { name: "Алексей", avatar: "alex.jpg", status: "Онлайн" },
    { name: "Мария", avatar: "maria.jpg", status: "Оффлайн" },
    { name: "Мария", avatar: "maria.jpg", status: "Оффлайн" },
    { name: "Мария", avatar: "maria.jpg", status: "Онлайн" },
    { name: "Мария", avatar: "maria.jpg", status: "Оффлайн" },
    { name: "Мария", avatar: "maria.jpg", status: "Онлайн" },
]

const container = document.querySelector('.community__Grid');
users.forEach(u => container.appendChild(userProfileCard(u)));