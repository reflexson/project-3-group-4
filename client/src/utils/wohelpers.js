

function newWorkout() {
    const woButtons = document.getElementById('woButtons');
    woButtons.classList.add('hide');
    const newWoForm = document.getElementById('newWoForm');
    newWoForm.classList.remove('hide');
}



// function handleExSubmit(e){
//     e.preventDefault();
//     var select = document.getElementById('select');
//     const newRow = document.createElement('tr')
//     newExName = document.getElementById('newExName').value;

//     if ( select.options[select.selectedIndex].text === "New Exercise"){
//         exercises.push(newExName)
//     }else{
//         exercises.push(select.options[select.selectedIndex].text)
//     }
       
// }

function handleWoSubmit(e){
    e.preventDefault();
}



export{newWorkout,   handleWoSubmit}