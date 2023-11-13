// design static UI (done)
// load the dataset into the controller ie consol (done)
//create li with initial dataset.
// render the table with initial dataset.
// register event listener on  searchbox and get user input.
// filter the master record set.
//rerender the table with  filtered dataset.


const createLi = (emoji) => {
 
    const emojiDiv = document.createElement('div');
    emojiDiv.classList.add('emoji');
    emojiDiv.innerText = emoji.emoji;

    const aliasesDiv = document.createElement('div');
    aliasesDiv.classList.add('aliases');
    aliasesDiv.innerText = emoji.aliases.join(", ");

    const descriptionDiv = document.createElement('div');
    descriptionDiv.classList.add('description');
    descriptionDiv.innerText = emoji.description;

    const createdLi = document.createElement('li');
    createdLi.append(emojiDiv, aliasesDiv, descriptionDiv);
    return createdLi;
};


const emojiulRef = document.getElementById('emojiUL');
const renderEmojiUl = (emojiList) => {
    emojiulRef.innerHTML = "";
    emojiList.forEach((emoji) => {
     const li = createLi(emoji);
     emojiulRef.append(li);
    });
};
renderEmojiUl(emojiList);

const inputBox = document.getElementById('input');
inputBox.addEventListener('keyup', (e) => {
const inputValue = e.target.value.toLowerCase();
const filteredEmojiList = emojiList.filter((emoji) => 
    emoji.description.toLowerCase().includes(inputValue) ||  
    emoji.aliases.join(", ").toLowerCase().includes(inputValue)
  );
  renderEmojiUl(filteredEmojiList);
});



// ................................................................
// const createLi = (emoji) => {
//     const emojiDiv = document.createElement('div');
//     emojiDiv.classList.add('emoji');
//     emojiDiv.innerText = emoji.emoji;

//     const aliasesDiv = document.createElement('div');
//     aliasesDiv.classList.add('aliases');
//     aliasesDiv.innerText = emoji.aliases.join(", ");

//     const descriptionDiv = document.createElement('div');
//     descriptionDiv.classList.add('description');
//     descriptionDiv.innerText = emoji.description;

//     const createdLi = document.createElement('li');
//     createdLi.append(emojiDiv, aliasesDiv, descriptionDiv);
//     return createdLi;
// };

// const emojiulRef = document.getElementById('emojiUL');
// const renderEmojiUl = (emojiList) => {
//     emojiulRef.innerHTML = "";
//     emojiList.forEach((emoji) => {
//         const li = createLi(emoji);
//         emojiulRef.append(li);
//     });
// };

// renderEmojiUl(emojiList);

// const inputBox = document.getElementById('input');
// inputBox.addEventListener('keyup', (e) => {
//     const inputValue = e.target.value.toLowerCase();
//     const filteredEmojiList = emojiList.filter((emoji) =>
//         emoji.description.toLowerCase().includes(inputValue) ||
//         emoji.aliases.join(", ").toLowerCase().includes(inputValue)
//     );
//     renderEmojiUl(filteredEmojiList);
// });
