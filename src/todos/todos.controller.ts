import { Body, Controller, Get, Post } from '@nestjs/common';
import { Todo } from './interfaces/todo.interface';
import { TodosService } from './todos.service';

@Controller('todos')
export class TodosController {
  constructor(private readonly todosService: TodosService) {}

  @Get()
  findAll(): Todo[] {
    return this.todosService.findAll();
	}
	
	@Post()
	create(@Body() todo) {
		return this.todosService.create(todo);
	}
}
