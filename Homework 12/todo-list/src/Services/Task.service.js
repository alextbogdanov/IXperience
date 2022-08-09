import { collection, addDoc, doc, updateDoc, getDocs, deleteDoc, query, where } from "firebase/firestore";

import { db } from "../Firebase/Firebase";
import Task from "../Models/Task";

class TaskService {
    constructor() {
        this.collection = 'tasks';
    }

    async readTasks(user) {
        const collectionReference = collection(db, this.collection);
        const q = query(collectionReference, where('userId', '==', user.uid));

        const querySnapshot = await getDocs(q);

        let tasks = [];

        querySnapshot.forEach((doc) => {
            let task = Task.fromFirebase(doc);

            tasks.push(task);
        });

        return tasks;
    }

    async createTask(task) {
        const docRef = await addDoc(collection(db, this.collection), task.toJson());

        task.id = docRef.id;
        return task;
    }

    async updateTask(task) {
        const docRef = doc(db, this.collection, task.id);

        await updateDoc(docRef, task.toJson());

        return task;
    }

    async deleteTask(task) {
        const docRef = await deleteDoc(doc(db, this.collection, task.id));

        return docRef;
    }
}

const taskService = new TaskService();

export default taskService;