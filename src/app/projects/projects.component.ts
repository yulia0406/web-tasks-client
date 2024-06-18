import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { IProject } from '../models/project';
import { ProjectsService } from '../service/projects.service';
import { UpdateProjectFormComponent } from '../update-project-form/update-project-form.component';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  providers: [DatePipe]
})
export class ProjectsComponent implements OnInit {
  tasksCount!: number[];
  task: { [key: number]: number } = {};
  projects!: IProject[];
  count: number = 0;
routerLink: any;
filteredProjects!: IProject[];



  constructor(
    private projectsService : ProjectsService,
    private router: Router,
    private modalService: NgbModal,
    
    ) {}


    

    ngOnInit(): void {
      this.projectsService.getCountTasksUnclosed().subscribe({
        next:(tasksCount) => {this.tasksCount = tasksCount;
          console.log(tasksCount);
        },
        error:(error) => {error.console();}
      }
    );
   

      this.projectsService.getAll().subscribe({
        next: (projects) => {this.projects = projects;
          this.filteredProjects = projects;
        },
        error: (error) => {}
      })
    }

    filterProjects(event: Event) {
      const searchTerm = (event.target as HTMLInputElement).value;
  
      this.filteredProjects = this.projects.filter(project => {
        return project.projectName.toLowerCase().includes(searchTerm.toLowerCase()) ||
               project.projectDescription.toLowerCase().includes(searchTerm.toLowerCase());
      });
    }
    
    goToProjectDetails(id: number){
      this.router.navigate(['/projects/tasks/project', id]);
    }

    
      
    deleteProject(event: Event, id: number, index: number):void {
      event.stopPropagation();
      this.projects.splice(index, 1);
      this.projectsService.delete(id).subscribe({
        
      })
    }
}
  