const itemList = document.getElementById('listItem');

itemList.addEventListener('click', (event) => {
  
    const clickedItem = event.target;
  
  if (clickedItem.tagName === 'LI') {
    const newItemText = prompt('Enter new text for the item:');
    if (newItemText !== null) {
      clickedItem.textContent = newItemText;
    }
  }
});