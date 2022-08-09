export default class Task {
    constructor({ id, name, complete, userId }) {
        this.id = id;
        this.name = name;
        this.complete = complete;
        this.userId = userId;
    }

    toJson() {
        return {
            name: this.name,
            complete: this.complete,
            userId: this.userId
        };
    }

    static fromFirebase(docSnap) {
        const data = docSnap.data();

        return new Task({
            id: docSnap.id,
            name: data.name,
            complete: data.complete,
            userId: data.userId
        });
    }
}