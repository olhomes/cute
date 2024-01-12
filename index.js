// Elements 
const yes_button = document.getElementById('yes');
const no_button = document.getElementById('no');
const img_elem = document.getElementById('image');
const content_actions = document.querySelector('.content-actions');

// Assets
const idle_assets = ['assets/normal/img.svg', 'assets/normal/img1.svg'];
const dance_assets = ['assets/cutest2/b_yes1.svg', 'assets/cutest2/b_yes2.svg', 'assets/cutest2/b_yes3.svg','assets/cutest2/b_yes4.svg','assets/cutest2/b_yes5.svg','assets/cutest2/b_yes6.svg','assets/cutest2/b_yes7.svg','assets/cutest2/b_yes8.svg','assets/cutest2/b_yes9.svg','assets/cutest2/b_yes10.svg','assets/cutest2/b_yes11.svg'];
const yes_assets = ['assets/yes/yes1.svg', 'assets/yes/yes2.svg','assets/yes/yes3.svg', 'assets/yes/yes4.svg', 'assets/yes/yes5.svg', 'assets/yes/yes6.svg','assets/yes/yes7.svg', 'assets/yes/yes8.svg']
const state = {
    current: idle_assets,
    frame: 0,
};

// Loop
setInterval(() => {
    state.frame++;
    const frames = state.current;
    const frame = frames[state.frame % frames.length];
    img_elem.src = frame;
}, 80);

// Events
yes_button.addEventListener('mouseenter', () => state.current = yes_assets);

const leave_event = () => state.current = idle_assets;
yes_button.addEventListener('mouseleave', leave_event);

yes_button.addEventListener('click', () => {
    yes_button.removeEventListener('mouseleave', leave_event);
    content_actions.style.display = 'none';
    state.current = dance_assets;
    img_elem.style.height = '400px';
    img_elem.style.width = '400px';
});

no_button.addEventListener('mouseenter', () => {
    const width = window.visualViewport.width;
    const height = window.visualViewport.height;
    no_button.style.position = 'fixed';
    const bounds = no_button.getBoundingClientRect();
    
    const x = getRandom(width - bounds.width);
    const y = getRandom(height - bounds.height);

    no_button.style.left = x + "px";
    no_button.style.top = y + "px";
});

// Utils
function getRandom(limit) {
    return Math.round(Math.random() * limit);
}

