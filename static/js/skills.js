const VideosList = document.getElementById('VideosList');
const searchVideoBar = document.getElementById('searchVideoBar');
let hpVideos = [];

searchVideoBar.addEventListener('keyup', (e) => {
    const searchString = e.target.value.toLowerCase();

    const filteredVideos = hpVideos.filter((skills) => {
        return (
            skills.name.toLowerCase().includes(searchString) 
            ||
            skills.text.toLowerCase().includes(searchString)
        );
    });
    displayVideos(filteredVideos);
});

const loadVideos = async () => {
    try {
        const res = await fetch('https://62a0be8ba9866630f816e7ff.mockapi.io/skills');
        hpVideos = await res.json();
        displayVideos(hpVideos);
    } catch (err) {
        console.error(err);
    }
};

const displayVideos = (videos) => {
    const htmlString = videos
        .map((skills) => {
            return `
            <li class="video">
                <p>${skills.text}</p>   
                <a href="${skills.link}"><h6>${skills.name}</h6></a>  
                <a href="${skills.link}"><img src="${skills.image}" style="width: 100%";"></img></a>
             
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
// function VideoOpen(){
//     videoPl.style.display = "block";
// }
// searchVideoBar.addEventListener('keydown', VideoOpen)