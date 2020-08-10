let dinos = [
    {
        id: 0,
        name: 'Scipionyx',
        img: 'http://images.dinosaurpictures.org/Scipionyx_QY_200_3742.jpg',
        cena: 221
    },
    {
        id: 1,
        name: 'Becklespinax',
        img: 'http://images.dinosaurpictures.org/altispinax-becklespinax_e05c.jpg',
        cena: 275
    },
    {
        id: 2,
        name: 'Sciurumimus',
        img: 'http://images.dinosaurpictures.org/Sciurumimus_albersdoerferi_web_fa15.jpg',
        cena: 341
    },
    {
        id: 3,
        name: 'Hypsilophodon',
        img: 'http://images.dinosaurpictures.org/hypsilophodon-1024x636_6963.jpg',
        cena: 189
    },
    {
        id: 4,
        name: 'Dacentrurus',
        img: 'http://images.dinosaurpictures.org/Dacentrurus_20140118_5d27.jpg',
        cena: 315
    },
    {
        id: 5,
        name: 'Iguanodon',
        img: 'http://images.dinosaurpictures.org/Iguanodon_1157950_ea00.jpg',
        cena: 374
    },
    {
        id: 6,
        name: 'Asylosaurus',
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Asylosaurus_NT.jpg/440px-Asylosaurus_NT.jpg',
        cena: 301
    },
    {
        id: 7,
        name: 'Efraasia',
        img: 'http://images.dinosaurpictures.org/efraasia_0a4e.jpg',
        cena: 199
    },
    {
        id: 8,
        name: 'Cryptosaurus',
        img: 'https://images.dinosaurpictures.org/Cryptosaurus/Cryptosaurus_tumblr_inline_on3a5nVchm1rx4yme_1280_94c8.jpg',
        cena: 218
    }
]

let kupljeniDino = []

const forma = document.getElementById('forma')
const kupacInput = document.getElementById('kupac')
const dinoInput = document.getElementById('select-dino')
const napomenaInput = document.querySelector('textarea-field')
const submit = document.getElementById('submit')
const select = document.getElementById('select-dino')
const ispisiButton = document.getElementById('btn-all')
const itemContainer = document.getElementById('item-container')


dinos.forEach(dino => {
    const option = document.createElement('option')
    option.value =`${dino.id}`
    option.textContent = `${dino.name}`
    select.appendChild(option)
})

const ispis = () => {

    const itemDiv = createElement('div')
    itemDiv.className = 'item'

        const p1 = createElement('p')
        p1.innerHTML = `<span>Купац:</span> ${kupacInput.value}`
        const p2 = createElement('p')
        p2.innerHTML = `<span>Напомена:</span> ${napomenaInput.value}`
        const p3 = createElement('p')   
        p3.innerHTML = `<span>Диносаурус: </span> ${dinoInput.value}`
        const p4 = createElement('p')   
        p4.innerHTML = `<span>Цена: </span> ${}`
        const p5 = createElement('p')
        const button = createElement('button')
        button.textContent = 'Obrisi'
        p5.appendChild(button)

    button.addEventListener('click', (e) => {
        e.target.parentElement.parentElement.remove()
    })

    itemDiv.append(p1, p2, p3, p4, p5)
    itemContainer.appendChild(itemDiv)

    kupacInput = ''
    napomenaInput = ''
}

const validForm = () => {
        kupacInput.value.trim() !== ''
        && kupacInput.value.trim().length >= 4
        && dinoInput.value !== ''
}

forma.addEventListener('submit', () => {
    if(!validForm()) {
    const alert = document.createElement(p)
    alert.textContent = 'Sva polja moraju biti popunjena. Ime kupca mora biti duze od 4 slova'
        itemContainer.prepend(alert)
        setTimeout(() => {
            greska.remove()
        },1200)

        return
    }
    kupljeniDino.push(
        {
        dinosaurs: dinoInput.value,
        kupac: kupacInput.value,
        napomena: napomenaInput.value,
        cena: cena
        }
    ) 
    ispis()
})

ispisiButton.addEventListener('click', () => {
    console.log(kupljeniDino)
})