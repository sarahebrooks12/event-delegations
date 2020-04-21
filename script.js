// refactor - DRY 

// write a function that builds and prints a single task
// document.querySelector("#new-task-button").addEventListener("click", function (){
//     console.log("you clicked submit")
// }
// )

document.querySelector("#page-content").addEventListener("click", function(){
    if(event.target.id === "new-task-button"){
        console.log("You clicked submit")
        const taskValue = document.querySelector("#new-task-input").value
        console.log(taskValue)
        //print the task value to the DOM
        document.querySelector("#page-content").innerHTML += buildSingleTask (taskValue)
    }
})


// when user clicks my to do list - prints heading
document.querySelector("#my-todo-list").addEventListener("click", function () {
    //print the heading and build the form
    const pageContentContainer = document.querySelector("#page-content");
    pageContentContainer.innerHTML = `<h1>My to do List</h1>`
    pageContentContainer.innerHTML += buildTaskForm();

})


// when user clicks family to do list - prints heading
document.querySelector("#family-todo-list").addEventListener("click", function (){
    document.querySelector("#page-content").innerHTML = `<h1>Family to do List</h1>`
})

// when user clicks completed tasks - prints heading
document.querySelector("#completed-tasks").addEventListener("click", function (){
    document.querySelector("#page-content").innerHTML = `<h1>Completed Tasks</h1>`
})