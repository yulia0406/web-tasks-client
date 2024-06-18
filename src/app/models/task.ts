import {IProject} from "./project"

export interface ITask{
    id: number,
    name: string,
    description: string,
    plannedEndDate: Date,
    completed: boolean,
    project: IProject
}