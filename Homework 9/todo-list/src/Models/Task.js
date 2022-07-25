export default class Task {
    static id = 0;

    constructor(name, completed) {
        this.id = Task.id;
        this.name = name;
        this.completed = completed;

        Task.id++;
    }
}