fetch('/assets/json/games.json')
    .then(response => response.json())
    .then(games => {
        const appsContainer = document.querySelector('.games');

        games.forEach(game => {
            const gameElement = document.createElement('div');
            gameElement.className = 'game';

            gameElement.innerHTML = `
        <img src="${game.image}" alt="${game.name}">
        <h3>${game.name}</h3>
      `;

            gameElement.addEventListener('click', async () => {
                var ute = __uv$config.prefix + __uv$config.encodeUrl(game.url)
                localStorage.setItem('url', ute);
                window.location.href = '/browser.html';
            });

            appsContainer.appendChild(gameElement);
        });
    });