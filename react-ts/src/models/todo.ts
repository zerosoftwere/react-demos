export class Todo {
    id: number;
    text: string;

    constructor(text: string, id = Date.now()) {
        this.text = text;
        this.id = id;
    }
}

export type OnAddTodo = (text: string) => void;
export type OnRemoveTodo = (id: number) => void;