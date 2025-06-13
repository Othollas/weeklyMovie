console.log(typeof videojs)


let selection = document.querySelector(".selection");

let movies = [{
  "nom": "Film1",
  "videoName": "aAyQX8Z_460svav1",
  "tracks": []
}, {
  "nom": "Film2",
  "videoName": "adB2EZZ_460svav1",
  "tracks": []
}, {
  "nom": "Film3",
  "videoName": "agmONYx_460svav1",
  "tracks": []
}, {
  "nom": "Film4",
  "videoName": "apR93On_460svav1",
  "tracks": []
}, {
  "nom": "Film5",
  "videoName": "aqyjv5Q_460svav1",
  "tracks": []
}, {
  "nom": "Film6",
  "videoName": "aRBLExA_460svav1",
  "tracks": []
}, {
  "nom": "Film7",
  "videoName": "aVvEXOd_460svav1",
  "tracks": []
}]

movies.map(video => {
  selection.innerHTML += movie(video.nom, video.videoName)
});



function movie(nom, videoName) {
  return `
     <div class="containerSelection">
        <p>${nom}</p>
        <video  class="video-js vignette" preload="auto" width="100px" height="100px" poster="./assets/AyQX8Z_460svav1.png"
        data-setup="{}">
        <source src="./assets/${videoName}.mp4" type="video/mp4"/>
        <source src="MY_VIDEO.webm" type="video/webm" />
        
      </video>

    </div>`;
};



setTimeout(() => {
  const videos = document.querySelectorAll(".vignette");
  console.log(videos)
  videos.forEach((videoEl) => {
    const player = videojs(videoEl, { controls: false });

    videoEl.addEventListener("mouseenter", () => {
      player.currentTime(0);
      player.play();
      console.log("mouse enter")
    });

    videoEl.addEventListener("mouseleave", () => {
      player.pause();
      player.currentTime(0);
      console.log("mouse leave")
    });
  });
}, 100);

