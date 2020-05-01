const todoList = document.querySelector('.list'); 
todoList.addEventListener('click', deleteCheck);
function deleteCheck(event) {
    const item = event.target;
     
        
        if(item.classList[1] == 'fa-trash'){
            const todoItem = item.parentElement;
            todoItem.remove();
        }
        if(item.classList[1] == 'fa-check-circle'){
            const todoItem = item.parentElement;
            todoItem.classList.toggle('done')
        }
}
function Submit() { 
    console.log("Submit....");
    if(document.forms['form']['name'].value == "" || document.forms['form']['surname'].value == "" || document.forms['form']['toDo'].value == ""){
       alert('Fill in all the fields');
       return false;
    }else{
        
        let node = document.createElement('li');
        let complete = document.createElement('i');
        let erase = document.createElement('i');

        erase.className = 'fas fa-trash';
        erase.style.color = '#EF5350';
        complete.className = 'fas fa-check-circle';
        complete.style.color = '#4CAF50';

 

        
        
        let time = {hours:document.forms['form']['hours'].value,minutes:document.forms['form']['minutes'].value};
        let name = document.forms['form']['name'].value;
        let surname = document.forms['form']['surname'].value;
        let toDo = document.forms['form']['toDo'].value;
         

        console.log(document.forms['form']['name'].value)
        console.log(document.forms['form']['surname'].value)
        console.log(document.forms['form']['toDo'].value) 

        document.getElementById('name').value = "";
        document.getElementById('surname').value = "";
        document.getElementById('toDo').value = ""; 
        document.getElementById('hours').value = ""; 
        document.getElementById('minutes').value = ""; 

        node.appendChild(complete);
        node.appendChild(document.createTextNode(` `));
        node.appendChild(erase);
        node.appendChild(document.createTextNode(` `));
        let textNode = document.createTextNode(` ${name} ${surname} - ${toDo} - ${time.hours} : ${time.minutes}`);
        node.appendChild(textNode);
        document.getElementById('list').appendChild(node);  
        
    }

}
