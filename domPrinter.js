
// builds and returns a task form for the "my to do list" page

function buildTaskForm () {
    return `
    <form>
    <input id="new-task-input" type="text" placeholder="New Task"/>
    </form>
    <button id="new-task-button">Submit</button>`
}

// print 
function buildSingleTask (nameOfTask) {
    return `<section> 
    <p>${Date.now().toString()}</p>
    <p>${nameOfTask}</p>

    </section>`
}