// const correctAnswers = ['B','B','B','B'];
// const form = document.querySelector('.quiz-form');
// const percentageFor = document.querySelector('.result');

// form.addEventListener('submit', e =>{
//     e.preventDefault();

//     let score = 0;
//     const userAnswres = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];

//     //Check answers

//     userAnswres.forEach((answer, index)=>{

//         if(answer === correctAnswers[index]){

//             score += 25;
//         //    let scr = score += 25; 
//         //   const percentageFor = document.querySelector('span');

//         //   percentageFor.innerHTML = '<span class="text-primary display-4 p-3">${scr}</span>';
//         //   console.log(scr);
//         }
    
//         percentageFor.querySelector('span').textContent = `${score}%`;
//         percentageFor.classList.remove('d-none');
//     });
// });


correctAnswers = ['B', 'B', 'B', 'B'];
const result = document.querySelector('.result');
const form = document.querySelector('.quiz-form');

form.addEventListener('submit',e =>{
    let score = 0;
    e.preventDefault();
    userAnswers = [form.q1.value,form.q2.value,form.q3.value,form.q4.value];

    correctAnswers.forEach((answer, index)=>{
    if(userAnswers[index] == answer){
        score += 25;
    }
    scrollTo(0 , 0); // to scroll to top
    result.querySelector('span').textContent = `${score}%`;
    result.classList.remove('d-none');
});
});


// window object
// Global object in js Motherf of js objects 
//set interval is 