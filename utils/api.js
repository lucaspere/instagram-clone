export const fetchImages = async (setItems, setLoading, setError, signal) => {

   try {

      const response = await fetch('https://unsplash.it/list', { signal });

      const images = await response.json()

      if (images.length === 0) {

         setError({
            isError: true,
            errorMessage: 'Falha ao carregar a imagem'
         })
      }

      setItems(images);
      setLoading(false);

   } catch (erro) {

   }
}


export const getImageFromId = id =>
   `https://unsplash.it/${600}/${600}?image=${id}`;