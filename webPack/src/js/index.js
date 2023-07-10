import { button , hiddemContent} from './loader';

button.onclick = secretFunction;
let hidden = true;
function secretFunction(){
    if (hidden) {
        hiddemContent.style.display = 'block';
        button.textContent = 'Hide Text';
        hidden = false;
    }else{
        hiddemContent.style.display = 'none';
        button.textContent = 'Show text'
        hidden = true;
    }
}