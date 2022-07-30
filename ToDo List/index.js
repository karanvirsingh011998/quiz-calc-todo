//Add a new todo to DOM

const addForm = document.querySelector('.add');
const list = document.querySelector('.todos');
const search = document.querySelector('.search');
const generateTemplate = (todo) =>{
    const html = `<li class="list-group-item d-flex justify-content-between align-items-center">
    <span>${todo}</span>
<i class="fa fa-trash delete"></i> 
</li>`;
list.innerHTML += html;
};

addForm.addEventListener('submit',e=>{
    e.preventDefault();
    const todo = addForm.add.value.trim();
    console.log(todo);

    if(todo.length)
    {
        generateTemplate(todo); 
        addForm.reset();
    }
});
// delete todos

list.addEventListener('click', e=>{

    if(e.target.classList.contains('delete'))
    {
            e.target.parentElement.remove();
    }

});

//Search the todos

// const filtertodos = term =>{
//     Array.from(list.children)
//     .filter((todo)=> {
//         return !todo.textContent.includes(term)
//         .forEach((todo) =>{
//             todo.classList.add('filtered');
//         })
//     })
// };

// search.addEventListener('keyup', e =>{

//     const val = e.target.value.trim();
    
//     console.log(val);

//     filtertodos(val);
// });

