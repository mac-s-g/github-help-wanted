// Define a function to fetch more items
function fetchMoreItems() {
    // Simulate an API call to get more items
    const newItems = ['Item 4', 'Item 5', 'Item 6'];
    
    // Append the new items to the list
    const itemContainer = document.getElementById('item-container');
    newItems.forEach(item => {
        const newItemElement = document.createElement('div');
        newItemElement.innerText = item;
        itemContainer.appendChild(newItemElement);
    });
}

// Define a function to check if the user has scrolled to the bottom
function checkScroll() {
    const loader = document.getElementById('loader');
    const loaderPosition = loader.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    
    if (loaderPosition < windowHeight) {
        fetchMoreItems();
    }
}

// Attach an event listener for scrolling
window.addEventListener('scroll', checkScroll);
