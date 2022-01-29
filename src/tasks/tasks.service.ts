import { Injectable, NotFoundException } from '@nestjs/common';
import { Task } from './task.model';
import { v4 as uuid } from 'uuid';
import { CreateTaskDto } from './dto/create-task-dto';

@Injectable()
export class TasksService {
  private tasks: Task[] = [];

  getAllTasks(): Task[] {
    return this.tasks;
  }

  getTaskById(id: string): Task {
    const found =  this.tasks.find(task => task.id === id);

    if(!!!found) throw new NotFoundException(`Task with ID "${id}" not found`);

    return found;
  }

  createTask(createTaskDto: CreateTaskDto): Task {
    const { title, description } = createTaskDto
    const task: Task = {
      id: uuid(),
      title,
      description,
      status: 'OPEN',
    };
    this.tasks.push(task);

    return task;
  }

  deleteTask(id: string): void {
    const found = this.getTaskById(id);
    this.tasks =  this.tasks.filter(task => task.id !== found.id);
  }

  updateTaskStatus(id: string, status: "OPEN" | "IN_PROGRESS" | "DONE"): Task {
    const task = this.getTaskById(id);
    task.status = status;
    return task
  }
}
