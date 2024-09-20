const mainPage = document.getElementById('main-page');
const addPage = document.getElementById('add-page');
const newsPage = document.getElementById('news-page')
export function switchToAdd() {

    mainPage.style.display = 'none';
    addPage.style.display = 'flex'
    newsPage.style.display = 'none'
}

export function switchToMain() {

    mainPage.style.display = 'flex';
    addPage.style.display = 'none'
    newsPage.style.display = 'none'
}

export function switchToNews() {
    mainPage.style.display = 'none';
    addPage.style.display = 'none'
    newsPage.style.display = 'flex'
}