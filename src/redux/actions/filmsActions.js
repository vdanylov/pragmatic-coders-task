const films = [
  {
    id: '1and3011',
    imageURL: 'https://upload.wikimedia.org/wikipedia/commons/f/f1/SWCA_-_Stormtrooper_from_Force_Awakens_%2817202865375%29.jpg',
    title: 'Inferno',
    summary: 'Lorem​ ​ ipsum....',
    rating: 5.3
  },
  {
    id: '2301abc',
    imageURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/R2-D2.JPG/800px-R2-D2.JPG',
    title: 'Star​ ​ Wars:​ ​ Episode​ ​ VII​ ​- ​The​ ​ Force​ ​ Awakens​',
    summary: 'Lorem​ ​ ipsum....',
    rating: 4.3
  },
  {
    id: '2301a23',
    imageURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/R2-D2.JPG/800px-R2-D2.JPG',
    title: 'Star​ ​ Wars:​ ​ Episode​ ​ VII​ ​- ​The​ ​ Force​ ​ Awakens​',
    summary: 'Lorem​ ​ ipsum....',
    rating: 8.73
  },
  {
    id: '22301a312c',
    imageURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/R2-D2.JPG/800px-R2-D2.JPG',
    title: 'Star​ ​ Wars:​ ​ Episode​ ​ VII​ ​- ​The​ ​ Force​ ​ Awakens​',
    summary: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa vel aliquam temporibus pariatur nesciunt? Eum laborum aliquam atque velit! Nihil dignissimos aut tempora distinctio quia sunt dolorum inventore placeat a.',
    rating: 4.35
  },
  {
    id: '23bxcv01abc',
    imageURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/R2-D2.JPG/800px-R2-D2.JPG',
    title: 'Star​ ​ Wars:​ ​ Episode​ ​ VII​ ​- ​The​ ​ Force​ ​ Awakens​',
    summary: 'Lorem​ ​ ipsum....',
    rating: 2.43
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

export const likeFilm = film => {
  return new Promise((resolve, reject) => {
      resolve(film);
  })
  .catch(error => {
    console.log("error >>>", error)
  })
}

export const dislikeFilm = film => {
  return new Promise((resolve, reject) => {
    resolve(film);
  })
  .catch(error => {
    console.log("error >>>", error)
  })
}