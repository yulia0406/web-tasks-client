import { Injectable } from '@angular/core';
import { IProject } from '../models/project';
import { Observable, map } from 'rxjs';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { environment } from '../../environments/environment.development';
import { ITask } from '../models/task';


@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor(private http: HttpClient) { }


  getAll(id: number): Observable<ITask[]> {
    console.log(`${environment.apiUrl}/projects/getAll`);
    
    return this.http.get<ITask[]>(`${environment.apiUrl}/tasks/getAllTask/${id}`);
  }



  delete(id1: number, id2: number ): Observable<boolean> {
    return this.http.delete<boolean>(`${environment.apiUrl}/tasks/deleteTask/projects/${id1}/tasks/${id2}`);
  }
}
