// --------------------------------------------  //
const item = document.querySelector('.item'); // наш объект для перемещения
// --------------------------------------------  //
const placeholders = document.querySelectorAll('.placeholder')

// нужно добавить несколько событий
// ------------------    1    -------------------------  // 
item.addEventListener('dragstart', dragstart); // начало движения item
item.addEventListener('dragend', dragend); // конец движения item

// ------------------    2     -------------------------  //

for (const placeholder of placeholders) {
    placeholder.addEventListener('dragover', dragover)
    placeholder.addEventListener('dragenter',dragenter)
    placeholder.addEventListener('dragleave', dragleave)
    placeholder.addEventListener('drop', dragdrop)

}

//      1      //
function dragstart(event) {
    event.target.classList.add('hold')
    setTimeout(() => {
        event.target.classList.add('hide')
    }, 0);
}

function dragend(event) {
    event.target.classList.remove('hold')
    event.target.classList.remove('hide')
}

//      2      //
function dragover(event) {
    event.preventDefault()
}

function dragenter(event) {
    event.target.classList.add('hovered')
}

function dragleave(event) {
    event.target.classList.remove('hovered')
}

function dragdrop(event) {
    event.target.classList.remove('hovered')
    event.target.append(item)
}
