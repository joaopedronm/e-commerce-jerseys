// IMAGENS DOS PRODUTOS

const images = []

const arrImg1 = []

let img1 = new Image()
img1.src = "./img/jerseys/gallery/mahomes-01.png"
const img2 = new Image()
img2.src = "./img/jerseys/gallery/mahomes-02.png"
const img3 = new Image()
img3.src = "./img/jerseys/gallery/mahomes-03.png"

arrImg1.push(img1, img2, img3)

const arrImg2 = []

const img4 = new Image()
img4.src = "./img/jerseys/gallery/josh-allen-01.png"
const img5 = new Image()
img5.src = "./img/jerseys/gallery/josh-allen-02.png"
const img6 = new Image()
img6.src = "./img/jerseys/gallery/josh-allen-03.png"

arrImg2.push(img4, img5, img6)

const arrImg3 = []

const img7 = new Image()
img7.src = "./img/jerseys/gallery/joe-burrow-01.png"
const img8 = new Image()
img8.src = "./img/jerseys/gallery/joe-burrow-02.png"
const img9 = new Image()
img9.src = "./img/jerseys/gallery/joe-burrow-03.png"

arrImg3.push(img7, img8, img9)

// Inserindo os arrays de imagens dentro do array principal das imagens:

images.push(arrImg1, arrImg2, arrImg3)



const products = [
    {
        id: 1,
        title: 'Patrick Mahomes - Chiefs',
        price: 219.90,
        img1: images[0][0],
        img2: images[0][1],
        img3: images[0][2]
    },
    {
        id: 2,
        title: 'Josh Allen - Bills',
        price: 219.90,
        img1: images[1][0],
        img2: images[1][1],
        img3: images[1][2]
    },
    {
        id: 3,
        title: 'Joe Burrow - Bengals',
        price: 199.90,
        img1: images[2][0],
        img2: images[2][1],
        img3: images[2][2]
    }
]

let url_atual = window.location.href;