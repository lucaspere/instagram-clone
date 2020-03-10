export const fetchImages = async (callback) => {

   try {

      const response = await fetch('https://unsplash.it/list');

      const images = await response.json()

      callback(undefined, images)
      
   } catch(erro) {
      
      callback(erro, undefined)
      
   }
}

export const getImageFromId = id =>
   `https://unsplash.it/${600}/${600}?image=${id}`;