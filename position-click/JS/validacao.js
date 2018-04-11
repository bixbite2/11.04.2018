console.log('validacao');

const input = document.querySelector('input');
const msg = document.querySelector('span');
input.addEventListener('keyup', function(e) {
    msg.style.display = 'none';
    const v = input.value;
    if (v.lenght < 11) {
        msg.style.display = 'inline';
    } else {
        for (let c of v.split('')) {
            if (!Number.isInteger(parseInt(c))) {
                msg.style.display = 'inline';
                break;
            }
        }
    }
});