const AudiosList = document.getElementById('AudiosList');
const searchAudioBar = document.getElementById('searchAudioBar');
let hpAudios = [];

searchAudioBar.addEventListener('keyup', (e) => {
    const searchString = e.target.value.toLowerCase();

    const filteredAudios = hpAudios.filter((audio) => {
        return (
            audio.name.toLowerCase().includes(searchString) ||
            audio.author.toLowerCase().includes(searchString)
        );
    });
    displayAudios(filteredAudios);
});

const loadAudios = async () => {
    try {
        const res = await fetch('https://62a0be8ba9866630f816e7ff.mockapi.io/audio');
        hpAudios = await res.json();
        displayAudios(hpAudios);
    } catch (err) {
        console.error(err);
    }
};

const displayAudios = (audio) => {
    const htmlString = audio
        .map((audio) => {
            return `
            <li class="audios">
                <div class="audioBooksID">
                <h2>${audio.name}</h2>
                <p>Yozuvchi: ${audio.author}</p>
                </div>
            </li>
                <img class="audioImg" src="${audio.image}"></img>
                <audio controls src="${audio.link.startsWith('./') ? `/media/${audio.link}` : audio.link}" style="width: 90%; height: 30px"></audio>
                <a href="${audio.link.startsWith('./') ? `/media/${audio.link}` : audio.link}">Yuklab olish</a>
                
            </li>
        `;
        })
        .join('');
    AudiosList.innerHTML = htmlString;
};

loadAudios();

"".startsWith