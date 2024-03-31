'use strict';

let new_keep = document.getElementById('new_keep')
let new_keep_btmn = document.getElementById('new_keep_btn')
let keeps = document.getElementById('keeps')

new_keep.value = localStorage.getItem('input')
new_keep.oninput = save_input

function save_input(event) {
    console.log(event.target.value)
}







new_keep_btmn.onclick = add_keep

function render_keep() {
    keeps.innerHTML = ''
    let i = 0;
    for (let value of keeps+array) {
        const keep_template = `
        <div class="col-3 p-2">
            <div class="border p-2">
                <p class="text-wrap overflow-hidden">${new_keep.value}</p>
                <button class="btn btn-danger" data-index="${i}" data-action="delete">
                    delete
                </button>
            </div>
        </div>
        `;
        keeps.insertAdjacentHTML('afterbegin', keep_template)
        i++;
    }
}

function add_keep(event) {
    if (new_keep.value) {
        keeps_array.push(new_keep.value);
        localStorage.setItem('keeps', JSON.stringify(keep))
        render_keep()
        new_keep.value = ''
        localStorage.removeItem('input')
        change_visible_add_keep();
    }
}

let btn_start_add_keep = document.getElementById('start_add_btn');
new_keep.hidden = true
new_keep_btn.hidden = true

btn_start_add_keep.onclick = change_visible_add_keep
function change_visible_add_keep() {
    new_keep.hidden = !new_keep.hidden
    new_keep_btn.hidden = !new_keep_btn.hidden
    btn_start_add_keep.hidden = !btn_start_add_keep.hidden
}