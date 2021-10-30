let tasks = ['Practice on Codewars', 'Practice piano'];
const btn = document.getElementById('add');
const listPlace = document.getElementById('list');
let input = document.getElementById('inp');
const deleteBtns = document.getElementsByClassName('del');




for (let i = 0; i < tasks.length; i++) {
    // let listItem = document.createElement('li');
    // let closeBtn = document.createElement('button');
    // closeBtn.className = 'btn btn-outline-danger';
    // closeBtn.innerText = 'Delete';
    // listItem.className = 'list-group-item d-flex justify-content-between align-items-center';
    // listItem.innerText = tasks[i];
    //listItem.appendChild(closeBtn);
    let li = `<li class="list-group-item d-flex justify-content-between align-items-center">
    ${tasks[i]}<button class="btn btn-outline-danger del">Delete</button></li>`    
    listPlace.insertAdjacentHTML('beforeend', li)

}


function deleteItem(e){
     this.parentNode.remove();
 }
 
 for (let i = 0; i < deleteBtns.length; i++) {
     deleteBtns[i].addEventListener('click', deleteItem);
 }


const add=()=>{  
    let alertBlock= `<div class="alert alert-danger alert-dismissible fade show" role="alert">
    Task field cannot be empty!
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
  </div>`;  
if (input.value =='') {
    document.getElementById('alert-place').insertAdjacentHTML('beforeend',alertBlock);
}else{
    //tasks.push(input.value);
    //listPlace.innerHTML = '';
//    for (let i = 0; i < tasks.length; i++) {
    let li = `<li class="list-group-item d-flex justify-content-between align-items-center">
    ${input.value}<button class="btn btn-outline-danger del">Delete</button></li>`    
    listPlace.insertAdjacentHTML('beforeend', li)
//}
    input.value = '';
     for (let i = 0; i < deleteBtns.length; i++) {
         deleteBtns[i].addEventListener('click', deleteItem);
     }
}
}



const addKeyboard=(e)=>{    
    if (e.key === 'Enter') {
        add();   
    }
}
btn.addEventListener('click', add);
document.body.addEventListener('keypress', addKeyboard)



