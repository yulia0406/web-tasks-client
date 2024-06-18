import { Component, Input, OnInit } from '@angular/core';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { IProject } from '../models/project';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectsService } from '../service/projects.service';

@Component({
  
  selector: 'app-add-project-form',
  templateUrl: './add-project-form.component.html',
  styleUrls: ['./add-project-form.component.css'],
  providers: [NgbActiveModal]
  
})
export class AddProjectFormComponent implements OnInit{
  @Input()
  title!: string;
  id!: number; 
  projectName!: string;
  projectDescription!: string;
  startDate!: Date;
  endDate!: Date;
 
  projects!: IProject[];
  updateProjects!: IProject[];

  constructor(
    private projectsService : ProjectsService,
    private activeModal: NgbActiveModal,
    private route: ActivatedRoute,
    private router: Router){}

    ngOnInit(): void {

    
    }

  save() {
    if(!this.projectName || !this.projectDescription || !this.startDate || !this.endDate)
      {
        alert("Требуется заполнить все поля");
        return;
      }
    const newProject: IProject = {
      id: 0,
      projectName: this.projectName,
      projectDescription: this.projectDescription,
      startDate: this.startDate,
      endDate: this.endDate
     };
    this.projectsService.add(newProject).subscribe({
    next:(response) => {
      this.projects.push(response);
    },
    error: (error) => alert(error.message)
      });
    
    
  }
  

  close() {
    this.activeModal.close();
  }
}
