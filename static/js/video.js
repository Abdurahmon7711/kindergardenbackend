const VideosList = document.getElementById('VideosList');
const searchVideoBar = document.getElementById('searchVideoBar');
let hpVideos = [];

searchVideoBar.addEventListener('keyup', (e) => {
    const searchString = e.target.value.toLowerCase();

    const filteredVideos = hpVideos.filter((video) => {
        return (
            video.name.toLowerCase().includes(searchString) 
            ||
            video.text.toLowerCase().includes(searchString)
        );
    });
    displayVideos(filteredVideos);
});

const loadVideos = async () => {
    try {
        const res = await fetch('https://62a0be8ba9866630f816e7ff.mockapi.io/video');
        hpVideos = await res.json();
        displayVideos(hpVideos);
    } catch (err) {
        console.error(err);
    }
};

const displayVideos = (videos) => {
    const htmlString = videos
        .map((video) => {
            return `
            <li class="video">
                <p>${video.text}</p>   
                <a href="${video.link}"><h6>${video.name}</h6></a>  
                <a href="${video.link}"><img src="${video.image}" style="width: 100%";"></img></a>
             
            </li>
        `;
        })
        .join('');
    VideosList.innerHTML = htmlString;
};

loadVideos();


const videoPl = document.querySelector('.videoPl')
function videoBlock(){
    videoPl.style.display = "none";
}
searchVideoBar.addEventListener('keyup', videoBlock)