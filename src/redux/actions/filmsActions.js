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
    imageURL: 'https://vignette.wikia.nocookie.net/starwars/images/e/eb/ArtooTFA2-Fathead.png/revision/latest?cb=20161108040914',
    title: 'Star​ ​ Wars:​ ​ Episode​ ​ VII​ ​- ​The​ ​ Force​ ​ Awakens​',
    summary: 'Lorem​ ​ ipsum....',
    rating: 8.53
  },
  {
    id: '2301a23',
    imageURL: 'https://upload.wikimedia.org/wikipedia/en/e/e9/First_Single_Volume_Edition_of_The_Lord_of_the_Rings.gif',
    title: 'Lord of the rings​',
    summary: 'The Lord of the Rings is an epic high fantasy novel written by English author and scholar J. R. R. Tolkien. ',
    rating: 9.73
  },
  {
    id: '22301a312c',
    imageURL: 'http://www.savethecat.com/wp-content/uploads/2015/10/landscapebackto.jpg',
    title: 'Back to future​',
    summary: 'Back to the Future is a 1985 American science-fiction adventure comedy film',
    rating: 8.35
  },
  {
    id: '23bxcv01abc',
    imageURL: 'http://vignette4.wikia.nocookie.net/headhuntersholosuite/images/8/89/Terminator_%281984%29.jpg/revision/latest?cb=20140525145217',
    title: 'The Terminator',
    summary: 'A seemingly indestructible humanoid cyborg is sent from 2029 to 1984 to assassinate a waitress, whose unborn son will lead humanity in a war against the machines, while a soldier from that war is sent to protect her at all costs.',
    rating: 8.43
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