import { Injectable } from '@nestjs/common';

@Injectable()
export class TodosService {
    todos = [
        {
            id: 1,
            title: 'Todo 1',
            description: 'I am the first todo',
        },
        {
            id: 2,
            title: 'Todo 2',
            description: 'I am the second todo',
        },
    ];
    
    findAll(): any[] {
        return this.todos;
    }
}
