import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo-dto.dto';
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

    findOne(id: string) : Todo {
        return this.todos.find(todo => todo.id === Number(id));
    }

    create(todo: CreateTodoDto): Todo[] {
        this.todos = [...this.todos, todo];
        return this.todos;
    }

    update(id: string, todo: CreateTodoDto) : Todo | NotFoundException {
        const todoToUpdate = this.todos.find(todo => todo.id === +id);
        if(!todoToUpdate) { 
            return new NotFoundException('not found'); 
        }

        if(todo.hasOwnProperty('done')) {
            todoToUpdate.done = todo.done;
        }

        if(todo.hasOwnProperty('title')) {
            todoToUpdate.title = todo.title;
        }

        if(todo.hasOwnProperty('description')) {
            todoToUpdate.description = todo.description;
        }

        return todoToUpdate;
    }

    delete(id: string) : Todo[] | NotFoundException {
        const nbOfTodosbeforeDelete = this.todos.length;
        this.todos = [...this.todos.filter(t => t.id !== +id)];

        if(this.todos.length >= nbOfTodosbeforeDelete) { 
            return new NotFoundException('not found'); 
        }

        return this.todos;
    }
}
