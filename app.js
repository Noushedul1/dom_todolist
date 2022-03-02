let submit = document.querySelector('input[type="submit"]');
let listGroup = document.getElementById('listGroup');
submit.addEventListener('click',(e)=>{
    e.preventDefault();
    let newItem = document.getElementById('item').value;
    let li = document.createElement('li');
    li.className = 'list-group-item';
    li.appendChild(document.createTextNode(newItem));
    listGroup.appendChild(li);
    let deleteBtn = document.createElement('button');
    deleteBtn.className = 'btn btn-danger btn-sm mx-5 delete';
    deleteBtn.appendChild(document.createTextNode('X'));
    li.appendChild(deleteBtn);
})