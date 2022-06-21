const charactersList = document.getElementById('charactersList');
const searchBar = document.getElementById('searchBar');
let hpCharacters = [];

searchBar.addEventListener('keyup', (e) => {
    const searchString = e.target.value.toLowerCase();

    const filteredCharacters = hpCharacters.filter((book) => {
        return (
            book.name.toLowerCase().includes(searchString) ||
            book.author.toLowerCase().includes(searchString)
        );
    });
    displayCharacters(filteredCharacters);
});

const loadCharacters = async () => {
    try {
        const res = await fetch('https://62a0be8ba9866630f816e7ff.mockapi.io/book');
        hpCharacters = await res.json();
        displayCharacters(hpCharacters);
    } catch (err) {
        console.error(err);
    }
};

const displayCharacters = (book) => {
    const htmlString = book
        .map((book) => {
            return `
            <li class="character" id="characterDiv">
                <div class="imgBooksDiv">
                    <a href="${book.link}"><img class="booksImg" src="${book.image}"></img></a>
                </div>
                <div class="booksID">
                    <h2>${book.name}</h2>
                    <p>${book.author}</p>
                    <a href="${book.link}">O'qish</a>
                </div>
                
                
            </li>
        `;
        })
        .join('');
    charactersList.innerHTML = htmlString;
};

loadCharacters();