function createTable() {
    let div = document.querySelector('#div');
    for (let i = 0; i < 3; i++) {
        let k = document.createElement('tr');
        div.append(k);
        for (let j = 0; j < 3; j++) {
            let e = document.createElement('td');
            k.append(e);
            e.insertAdjacentHTML('afterbegin', '<img src="imgs/cat_eating_looking_up.jpg" width="200px">');
            e.addEventListener("click", function () { 
                e.innerHTML = ""; 
                e.insertAdjacentHTML('afterbegin', '<img src="imgs/9e9.jpg"  width="200">'); 
            });
        }
    }
    setTimeout(() => div.innerHTML = '', 5000);
}
createTable();

// Button click event listener to restart the table
let button = document.querySelector('#button');
button.addEventListener('click', createTable);