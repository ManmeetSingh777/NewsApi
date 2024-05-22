const apiKey = '6e00951f5e9d2f5656ce7e8c314d6b40';
const apiUrl = `https://gnews.io/api/v4/search?q=example&lang=en&country=us&max=10&apikey=6e00951f5e9d2f5656ce7e8c314d6b40`;

async function fetchData() {
  try {
    const response = await axios.get(apiUrl);
    const articles = response.data.articles;
    const newsContainer = document.getElementById('newsContainer');

    articles.forEach(article => {
      const card = document.createElement('div');
      card.classList.add('card');

      const tagline = document.createElement('h3');
      tagline.textContent = article.title;

      const image = document.createElement('img');
      image.src = article.image;
      image.alt = article.title;

      const content = document.createElement('div');
      content.classList.add('content');

      const description = document.createElement('p');
      description.textContent = article.description;

      content.appendChild(description);

      card.appendChild(tagline); 
      card.appendChild(image);
      card.appendChild(content);

      newsContainer.appendChild(card);
    });
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

fetchData();
