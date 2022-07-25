import { collection, addDoc, doc, updateDoc, getDocs, deleteDoc } from "firebase/firestore";

import { db } from "../Firebase/Firebase";
import Task from "../Models/Task";

class TaskService {
    constructor() {
        this.collection = 'tasks';
    }

    async readTasks() {
        const querySnapshot = await getDocs(collection(db, this.collection));

        let tasks = [];

        querySnapshot.forEach((doc) => {
            const data = doc.data();
            let task = new Task(doc.id, data.name, data.completed);

            tasks.push(task);
        });

        return tasks;
    }

    async createTask(task) {
        const docRef = await addDoc(collection(db, this.collection), {
            name: task.name,
            completed: task.completed
        });

        task.id = docRef.id;
        return task;
    }

    async updateTask(task) {
        const docRef = doc(db, this.collection, task.id);

        await updateDoc(docRef, {
            completed: task.completed
        });

        return task;
    }

    async deleteTask(task) {
        const docRef = await deleteDoc(doc(db, this.collection, task.id));

        return docRef;
    }
}

const taskService = new TaskService();

export default taskService;