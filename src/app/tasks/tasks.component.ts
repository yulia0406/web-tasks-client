import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { IProject } from '../models/project';
import { ProjectsService } from '../service/projects.service';
import { UpdateProjectFormComponent } from '../update-project-form/update-project-form.component';
import { ITask } from '../models/task';
import { TasksService } from '../service/tasks.serbice';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  icon: string = "far fa-circle";
  idProject!: number;
  currentcolor: string = "black"; 
  tasksCount!: number[];
  task: { [key: number]: number } = {};
  tasks!: ITask[];
  count: number = 0;
routerLink: any;
condition:boolean = false;
current: any;
  taskColors: ("red" | "black")[] | undefined;



  constructor(
    private tasksService : TasksService,
    private router: Router,
    private route: ActivatedRoute,
    private modalService: NgbModal,
    
    ) {}


    ngOnInit(): void {
      const id = this.route.snapshot.params['id'];
      this.idProject = id;
      this.tasksService.getAll(id).subscribe({
        next: (tasks) => {this.tasks = tasks;
          console.log(this.tasks[0].name);
   
      const currentDate = new Date();

      this.taskColors = this.tasks.map((task, index) => {
        const plannedDate = new Date(task.plannedEndDate);
        if (currentDate > plannedDate && !task.completed) {
          return 'red';
        } else {
          return 'black';
        }
      });
        },
        error: (error) => {}
      })
      
      

    }

   
    goToProjectDetails(id: number){
      this.router.navigate(['/projects/tasks/project', id]);
    }
    deleteTask(id:number, index:number):void{
      this.tasks.splice(index, 1);
      this.tasksService.delete(this.idProject, id).subscribe({});
    }

    
}
  