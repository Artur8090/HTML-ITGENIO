let filter = document.querySelectorAll('a')

let cat = document.querySelectorAll('div[data-cat]')

for (let elem of filter) {

    elem.addEventListener('click', function () {

        const id = elem.getAttribute('id')

        for (let item of cat) {

            const dataCat = item.getAttribute('data-cat')

            if (id === 'all' || id === dataCat) {

                item.classList.remove('hide');

            } else {

                item.classList.add('hide')

            }

        }

    })

}

