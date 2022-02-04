import { Task } from 'src/tasks/task.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  username: string;

  @Column()
  password: string;

  // eager - retornará as taks relacionada ao usuario, sem a necessidade de realizar outra chamada ao banco de dados
  @OneToMany((type) => Task, (task) => task.user, { eager: true })
  tasks: Task[];
}
