export default class Observable {

    constructor() {
        this.observers = [];
    }

    registerObserver(observer) {
        this.observers.push(observer);
        return this.observers.length - 1;
    }

    unregisterObserver(index) {
        this.observers.splice(index, 1);
    }

    listener(id, event) {
        document.getElementById(id).addEventListener(event, (e) => {
            this.observers.forEach(observer => observer(e.target.value));
        });
    }

    update(data) {
        this.observers.forEach(observer => observer(data));
    }
}