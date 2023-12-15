const apiKey = '38911992-4282f3ea184d2afaa0285965b';

const fetchImages = (query, currentPage) => {
  return fetch(
    `https://pixabay.com/api/?q=${query}&page=${currentPage}&key=${apiKey}&image_type=photo&orientation=horizontal&per_page=12`
  )
    .then(response => response.json())
    .then(data => data.hits)
    .catch(error => {
      console.error('Error fetching images:', error);
      throw error;
    });
};

export default fetchImages;
