// forEach
const veggies = ['onion', 'garlic', 'potato'];
veggies.forEach( function(veggie, index) {
    console.log(`${index}. ${veggie}`);
});

const _veggies = ['onions', 'garlic', 'potato'];
function myFunc(_veggie, index) {
    console.log(`${index}: ${_veggie}`);
}
_veggies.forEach(myFunc)



const h1 = document.querySelector('h1');
const arr = ['Example Domain','First Click','Second Click','Third Click'];

function handleClicks() {
    switch(h1.innerText) {
        case arr[0]:
            h1.innerText = arr[1];
            break;
        case arr[1]:
            h1.innerText = arr[2];
            break;
        case arr[2]:
            h1.innerText = arr[3];
            break;
        default:
            h1.innerText = arr[0];
            break;
    }
}

h1.addEventListener('click', handleClicks)