import { Body, Controller, Get, Post, Param } from '@nestjs/common';
import { Todo } from './interfaces/todo.interface';
import { TodosService } from './todos.service';
import { CreateTodoDto } from './dto/create-todo-dto.dto';

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
	create(@Body() todo: CreateTodoDto) {
		return this.todosService.create(todo);
	}
}
