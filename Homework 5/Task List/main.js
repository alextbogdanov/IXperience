class Task {
    constructor(task, id) {
        this.task = task;
        this.completed = false;
    }
}

class UI {
    constructor() {
        this.input = document.getElementById('task-input');
        this.createButton = document.getElementById('create-task');
        this.tableBody = document.getElementById('tbody');

        this.tasks = [];
        let storedTasks = JSON.parse(localStorage.getItem('tasks'));

        if(storedTasks != null && storedTasks.length > 0) {
            this.tasks = storedTasks;
            this.populateTable();
        }
    }

    bindEventListeners() {
        this.createButton.addEventListener('click', (event) => this.createTask())
    }

    createTask() {
        let input = this.input.value;

        if(input.trim() != '') {
            let newTask = new Task(input);
            this.tasks.push(newTask);

            localStorage.setItem('tasks', JSON.stringify(this.tasks));
            this.populateTable();

            this.input.value = "";
        }
    }

    populateTable() {
        this.tableBody.innerHTML = '';

        for(const task of this.tasks) {
            let row = document.createElement('tr');
            let taskCell = document.createElement('td');
            let completedCell = document.createElement('td');
            let actionsCell = document.createElement('td');
            let completeButton = document.createElement('button');
            let deleteButton = document.createElement('button');
            let span = document.createElement('span');

            taskCell.innerHTML = task.task;
            completedCell.innerHTML = task.completed ? 'Complete' : 'Incomplete';
            completeButton.innerHTML = "Complete";
            completeButton.classList.add('btn', 'btn-primary');
            deleteButton.innerHTML = "Delete";
            deleteButton.classList.add('btn', 'btn-danger');
            span.innerHTML = " ";

            completeButton.addEventListener('click', (event) => this.completeTask(task));
            deleteButton.addEventListener('click', (event) => this.deleteTask(task));

            row.appendChild(taskCell);
            row.appendChild(completedCell);
            actionsCell.appendChild(completeButton);
            actionsCell.appendChild(span);
            actionsCell.appendChild(deleteButton);
            row.appendChild(actionsCell);

            this.tableBody.appendChild(row);
        }
    }

    completeTask(task) {
        this.tasks.find(t => t.task === task.task).completed = "Complete";

        localStorage.setItem('tasks', JSON.stringify(this.tasks));
        this.populateTable();
    }

    deleteTask(task) {
        this.tasks = this.tasks.filter((t) => {
            return t.task !== task.task;
        })

        localStorage.setItem('tasks', JSON.stringify(this.tasks));
        this.populateTable();
    }
}

let ui = new UI();
ui.bindEventListeners();