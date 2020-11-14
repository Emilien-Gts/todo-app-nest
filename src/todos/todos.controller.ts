import { Body, Controller, Get, Post, Param } from '@nestjs/common';
import { Todo } from './interfaces/todo.interface';
import { TodosService } from './todos.service';

@Controller('todos')
export class TodosController {
  constructor(private readonly todosService: TodosService) {}

  @Get()
  findAll(): Todo[] {
    return this.todosService.findAll();
	}

	@Get(':id')
	findOne(@Param('id') id: string): Todo {
		return this.todosService.findOne(id);
	}
	
	@Post()
	create(@Body() todo) {
		return this.todosService.create(todo);
	}
}
