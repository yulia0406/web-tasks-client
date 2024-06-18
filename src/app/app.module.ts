import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';

import { UpdateProjectFormComponent } from './update-project-form/update-project-form.component';
import { ProjectsComponent } from './projects/projects.component';
import { AddProjectFormComponent } from './add-project-form/add-project-form.component';
import { TasksComponent } from './tasks/tasks.component';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    AppComponent,
    UpdateProjectFormComponent,
    ProjectsComponent,
    AddProjectFormComponent,
    TasksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
