import { Component, Input, OnInit } from '@angular/core';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { IProject } from '../models/project';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectsService } from '../service/projects.service';

@Component({
  
  selector: 'app-update-project-form',
  templateUrl: './update-project-form.component.html',
  styleUrls: ['./update-project-form.component.css'],
  providers: [NgbActiveModal]
  
})
export class UpdateProjectFormComponent implements OnInit{
  @Input()
  title!: string;
  id!: number; 
  projectName!: string;
  projectDescription!: string;
  startDate!: Date;
  endDate!: Date;
  project!: { id: any; projectName: string; projectDescription: string; startDate: Date; endDate: Date; };
  
  projects!: IProject[];
  updateProjects!: IProject[];

  constructor(
    private projectsService : ProjectsService,
    private activeModal: NgbActiveModal,
    private route: ActivatedRoute,
    private router: Router){}



    ngOnInit(): void {
      

      this.route.params.subscribe(params => {
        this.route.params.subscribe(params => {
        this.id = params['id'];
    });
    this.projectsService.get(this.id).subscribe({
      next: (project) => {this.project = project;
        this.projectName = this.project.projectName;
        this.projectDescription = this.project.projectDescription;
        this.endDate = this.project.endDate;
        this.startDate = this.project.startDate; 
      },
      error: (error) => {}});
        this.project = {
          id: this.id,
          projectName: this.projectName,
          projectDescription: this.projectDescription,
          startDate: this.startDate,
          endDate: this.endDate};});
    
    }

  save() {
    if(!this.projectName || !this.projectDescription || !this.startDate || !this.endDate)
      {
        alert("Требуется заполнить все поля");
        return;
      }
    this.project.projectName = this.projectName;
  this.project.projectDescription = this.projectDescription;
  this.project.startDate = this.startDate;
  this.project.endDate = this.endDate;
    console.log( this.project);

   
    
    this.projectsService.update(this.id, this.project).subscribe(result =>
      {
        console.log( "update success", result);
      }, error => {
        console.error("update failed", error);
      }
      
    );
    
  }
  

}
