let tasks = [];

function add() {
    let temp = {};  
    temp.name = document.getElementById("name").value;
    temp.priority = parseInt(document.getElementById("priority").value); 

    if (temp.name.trim() === "" || isNaN(temp.priority)) {
        alert("Please enter a valid task and priority!");
        return;
    }

    tasks.push(temp);

    // Sort the tasks based on priority
    tasks.sort(function(a, b) {
        return a.priority - b.priority;
    });

    // Log tasks for debugging (optional)
    console.log(tasks);

    // Clear the existing list and render new tasks
    document.getElementById('tasklist').innerHTML = '';
    for (let i = 0; i < tasks.length; i++) {
        let li = document.createElement('li');
        li.innerHTML = `${tasks[i].name} (Priority: ${tasks[i].priority})`;
        document.getElementById('tasklist').appendChild(li);
    }

    // Clear input fields after adding the task
    document.getElementById("name").value = "";
    document.getElementById("priority").value = "";
}