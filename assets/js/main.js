// import video from "./video" 
// console.log(video)

// let movies = [
//   { "nom": "Film1", "videoName": "aAyQX8Z_460svav1", "tracks": [] },
//   { "nom": "Film2", "videoName": "adB2EZZ_460svav1", "tracks": [] },
//   { "nom": "Film3", "videoName": "agmONYx_460svav1", "tracks": [] },
//   { "nom": "Film4", "videoName": "apR93On_460svav1", "tracks": [] },
//   { "nom": "Film5", "videoName": "aqyjv5Q_460svav1", "tracks": [] },
//   { "nom": "Film6", "videoName": "aRBLExA_460svav1", "tracks": [] },
//   { "nom": "Film7", "videoName": "aVvEXOd_460svav1", "tracks": [] }
// ];



const videoList = document.getElementById('video-list');

movies.forEach(movie => {
  const card = document.createElement('div');
  card.className = 'video-card';
  card.setAttribute('data-video', movie.videoName);
  card.innerHTML = `
    <img loading="lazy" src="assets/thumbnails/${movie.videoName}.jpg" alt="${movie.nom}">
    <p>${movie.nom}</p>
  `;
  card.addEventListener('click', () => {
    window.location.href = `video.html?video=${encodeURIComponent(movie.videoName)}`;
  });
  videoList.appendChild(card);
});
