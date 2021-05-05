export const getGifs = async (category) => {
  const apiKey = 'Bm37KZ4G7a2QOBjbcEhTUrLFFVnaDJCn';
  const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=${apiKey}`;

  const resp = await fetch(url);
  const { data } = await resp.json();
  const gifs = data.map(item => {
    return {
      id: item.id,
      title: item.title,
      src: item.images.downsized_medium.url
    }
  });

  console.log('data', gifs);
  return gifs;
};