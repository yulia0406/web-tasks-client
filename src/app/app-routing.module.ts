import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsComponent } from './projects/projects.component';
import { UpdateProjectFormComponent } from './update-project-form/update-project-form.component';
import { AddProjectFormComponent } from './add-project-form/add-project-form.component';
import { TasksComponent } from './tasks/tasks.component';

const routes: Routes = [
  
  {path: 'projects', component: ProjectsComponent},
  {path: 'projects/update/:id', component: UpdateProjectFormComponent},
  {path: 'projects/add', component: AddProjectFormComponent},
  {path: 'projects/tasks/project/:id', component: TasksComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
