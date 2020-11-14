import { Injectable } from '@nestjs/common';
import { Todo } from './interfaces/todo.interface';

@Injectable()
export class TodosService {
    todos: Todo[] = [
        {
            id: 1,
            title: 'Todo 1',
            done: false,
            description: 'I am the first todo',
        },
        {
            id: 2,
            title: 'Todo 2',
            done: true,
            description: 'I am the second todo',
        },
        {
            id: 3,
            title: 'Todo 3',
            done: true,
            description: 'I am the third todo',
        },
    ];
    
    findAll(): Todo[] {
        return this.todos;
    }

    create(todo: Todo): Todo[] {
        this.todos = [...this.todos, todo];
        return this.todos;
    }
}
