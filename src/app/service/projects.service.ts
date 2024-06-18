import { Injectable } from '@angular/core';
import { IProject } from '../models/project';
import { Observable, map } from 'rxjs';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { environment } from '../../environments/environment.development';


@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor(private http: HttpClient) { }


  getAll(): Observable<IProject[]> {
    console.log(`${environment.apiUrl}/projects/getAll`);
    return this.http.get<IProject[]>(`${environment.apiUrl}/projects/getAll`);
  }

  get(id: number): Observable<IProject> {
    return this.http.get<IProject>(`${environment.apiUrl}/projects/get/${id}`);
  }

  getCountTasksUnclosed(): Observable<number[]> {
    return this.http.get<number[]>(`${environment.apiUrl}/projects/getCountTasksUnclosed`)
  }

  add(project: IProject): Observable<IProject> {
    console.log("Зашло");
    return this.http.post<IProject>(`${environment.apiUrl}/projects/create`, project);
  }

  update(id: number, project: IProject): Observable<IProject> {
    console.log( project);
    return this.http.put<IProject>(`${environment.apiUrl}/projects/update/${id}`, project);
  }

  delete(id: number): Observable<boolean> {
    return this.http.delete<boolean>(`${environment.apiUrl}/projects/delete/${id}`);
  }
}
