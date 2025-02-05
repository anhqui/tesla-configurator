const topBar = document.querySelector('#top-bar');
const exteriorColorSection = document.querySelector('#exterior-buttons');
const interiorColorSection = document.querySelector('#interior-buttons');
const exteriorImage = document.querySelector('#exterior-image');
const interiorImage = document.querySelector('#interior-image');

// Hanlde Top Bar On Scroll
const handleScroll = () =>{
    const atTop = window.scrollY === 0;
    topBar.classList.toggle('visible-bar', atTop)
    topBar.classList.toggle('hidden-bar', !atTop)
}

// Image Mapping
const exteriorImages = {
    'Stealth Grey': './images/model-y-stealth-grey.jpg',
    'Pearl White': './images/model-y-pearl-white.jpg',
    'Deep Blue': './images/model-y-deep-blue-metallic.jpg',
    'Solid Black': './images/model-y-solid-black.jpg',
    'Ultra Red': './images/model-y-ultra-red.jpg',
    'Quick Silver': './images/model-y-quicksilver.jpg',
}
const interiorImages = {
    Dark: './images/model-y-interior-dark.jpg',
     Light: './images/model-y-interior-light.jpg',
}

// Handle Color Selection
const handleColorButtonClick = (event) =>{
    let button;
    // console.log(event.target.tagName)
    if(event.target.tagName === 'IMG'){
        button = event.target.closest('button')
    }else if(event.target.tagName === 'BUTTON'){
        button = event.target
    }
    if(button){
        const buttons = event.currentTarget.querySelectorAll('button')
        buttons.forEach(btn => btn.classList.remove('btn-selected'))
        button.classList.add('btn-selected');

        // Change exterior image
        if(event.currentTarget === exteriorColorSection){
            const color = button.querySelector('img').alt;
            exteriorImage.src = exteriorImages[color]
        }
        // Change interior image
        if(event.currentTarget === interiorColorSection){
            const color = button.querySelector('img').alt;
            interiorImage.src = interiorImages[color]
        }
    }
}
// Event Listeners
window.addEventListener('scroll', ()=> requestAnimationFrame(handleScroll))
exteriorColorSection.addEventListener('click', handleColorButtonClick)
interiorColorSection.addEventListener('click', handleColorButtonClick)