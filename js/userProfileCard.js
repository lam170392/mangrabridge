export function userProfileCard(user) {
    const card = document.createElement("div");
    card.className = 'user-card';
    card.innerHTML = `
        <div class="user-card__avatar">
            <img src="https://i.pravatar.cc/40" alt="${user.name}" loading="lazy" width="60" height="60">
        </div>
        <div class="user-card__info">
            <h3 class="user-card__name">${user.name}</h3>
            <p class="user-card__status">${user.status}</p>
            <div class="user-card__languages">
                <span class="lang native">RU</span>
                <span class="lang">EN</span>
                <span class="lang">DE</span>
            </div>
            <button class="user-card__action">Написать</button>
        </div>
    `;
    return card;
}




