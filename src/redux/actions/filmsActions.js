const films = [
  {
    id: '1and3011',
    imageURL: 'https://pl.wikipedia.org/wiki/Gwiezdne_wojny:_Przebudzenie_Mocy#/media/File:R2D2_(22213548240).jpg​​',
    title: 'Inferno',
    summary: 'Lorem​ ​ ipsum....',
    rating: 5.3
  },
  {
    id: '2301abc',
    imageURL: 'https://upload.wikimedia.org/wikipedia/commons/f/f1/SWCA_-_Stormtrooper_from_Force_Awakens_%2817202865375%29.jpg​',
    title: 'Star​ ​ Wars:​ ​ Episode​ ​ VII​ ​- ​The​ ​ Force​ ​ Awakens​',
    summary: 'Lorem​ ​ ipsum....',
    rating: 8.3
  }
]

export const getFilms = () => {
  return new Promise((resolve, reject) => {
    //loading is started
    setTimeout(() => {
      resolve(films)
    }, 2000)
  })
  .catch(error => {
    console.log("error >>>", error)
  })
}

export const likeFilm = id => {
  return new Promise((resolve, reject) => {
      resolve(id);
  })
  .catch(error => {
    console.log("error >>>", error)
  })
}

export const dislikeFilm = id => {
  return new Promise((resolve, reject) => {
    resolve(id);
  })
  .catch(error => {
    console.log("error >>>", error)
  })
}