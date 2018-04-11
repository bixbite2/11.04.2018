console.log('main.js');

const criadinho = function(e) {
    const div = document.createElement('div');
    div.style.backgroundColor = 'black';
    div.style.position = 'absolute';
    div.style.width = '10px';
    div.style.height = '10px';
    div.style.left = `${e.clientX-5}px`;
    div.style.top = `${e.clientY-5}px`;
    div.style.borderRadius = '5px';
    document.body.appendChild(div);
};

document.addEventListener('click', criadinho);

const divm = document.querySelector('div.mover');

const mover = function(e) {
    const l = Number.parseInt(divm.style.left) | 0;
    const t = Number.parseInt(divm.style.top) | 0;
    const speed = 5;
    if (e.code === 'KeyD') {
        divm.style.left = `${l+speed}px`;
    }
    if (e.code === 'KeyA') {
        divm.style.left = `${l-speed}px`;
    }
    if (e.code === 'KeyW') {
        divm.style.top = `${t-speed}px`;
    }
    if (e.code === 'KeyS') {
        divm.style.top = `${t+speed}px`;
    }
};

document.addEventListener('keypress', mover);