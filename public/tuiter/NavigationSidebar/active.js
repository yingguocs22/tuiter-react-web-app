// Cache the list, and the items
const list = document.querySelector('ul');

const links = list.querySelectorAll('a');
console.log(links)

// Add one listener to the list element
list.addEventListener('click', handleClick);

// If the clicked element is a link remove all
// the active classes from the other links, and then
// add the active class to the link that was clicked on
function handleClick(e) {
    if (e.target.matches('a')) {
        links.forEach(link => link.classList.remove('active'));
        e.target.classList.add('active');
    }
}