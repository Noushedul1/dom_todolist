let submit = document.querySelector('input[type="submit"]');
let listGroup = document.getElementById('listGroup');
// filter
let filter = document.getElementById('filter');

//create element and add item
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

// remove item 
listGroup.addEventListener('click',(e)=>{
    e.preventDefault();
    // console.log(e.target.classList.contains('delete'));
    if(e.target.classList.contains('delete')){
        if(confirm('Are you sure?')){
            let li = e.target.parentElement;
            listGroup.removeChild(li);
        }
    }
})

// filter 
filter.addEventListener('keyup',(e)=>{
    e.preventDefault();
    // conver text to lowercase 
    let text = e.target.value.toLowerCase();
    // get lis 
    let items = listGroup.getElementsByTagName('li');
    // convert to an array 
    Array.from(items).forEach((item)=>{
    let itemName = item.firstChild.textContent;
    if(itemName.toLowerCase().indexOf(text) != -1){
        item.style.display = 'block';
    }else{
        item.style.display = 'none'
    }
    })
})