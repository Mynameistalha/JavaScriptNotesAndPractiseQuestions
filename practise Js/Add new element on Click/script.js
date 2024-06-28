const addItemBtn = document.getElementById('addItemBtn');
const itemList = document.getElementById('itemList');

addItemBtn.addEventListener('click', function() {
  const newItem = document.createElement('li');
  newItem.textContent = prompt("Enter New Item")
  itemList.appendChild(newItem);
});