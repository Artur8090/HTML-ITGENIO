const button = document.querySelector('#searchButton').addEventListener('click', searchHero);

async function searchHero(){
    const heroInput = document.querySelector('#heroInput').value;
    const heroInfo = document.querySelector('#hero-info');
    heroInfo.innerHTML = '';
    
    if(heroInput === ''){
        heroInfo.innerHTML = 'Пожалуйста, введите имя супергероя';
        return;
    }
    
    const loading = document.querySelector('#loading');
    loading.style.display = 'block';
    
    try {
        let response = await fetch(`https://www.superheroapi.com/api.php/47c77dabcbba4eaa2c0a3b968a0d670b/search/${heroInput}`);
        let data = await response.json();
        
        if (data.response === 'error') {
            heroInfo.innerHTML = 'Супергерой не найден';
        } else {
            displayHeroInfo(data.results[0]);
        }
    } catch(error) {
        heroInfo.innerHTML = 'Произошла ошибка при поиске супергероя';
        console.error('Супергерой не найден', error);
    } finally {
        loading.style.display = 'none';
    }
}

function displayHeroInfo(hero) {
    const heroInfo = document.querySelector('#hero-info');
    heroInfo.innerHTML = `
        <h2>${hero.name}</h2>
        <p><strong>Полное имя:</strong> ${hero.biography['full-name']}</p>
        <p><strong>Разведка:</strong> ${hero.powerstats.intelligence}</p>
        <p><strong>Сила:</strong> ${hero.powerstats.strength}</p>
        <p><strong>Скорость:</strong> ${hero.powerstats.speed}</p>
        <p><strong>Выносливость:</strong> ${hero.powerstats.durability}</p>
        <p><strong>Сила:</strong> ${hero.powerstats.power}</p>
        <p><strong>Бой:</strong> ${hero.powerstats.combat}</p>
        <img src="${hero.image.url}" alt="${hero.name}">
    `;
}
