import {Injectable} from '@angular/core';
import {classes} from "../data/data";
import {Data} from "../interfaces/data.interface";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  getClasses() {
    return classes;
  }

  deleteClass(data: Data){
    classes.splice(classes.indexOf(data),1);
  }

  update(name: string,data: Data){
    classes[classes.indexOf(data)].students.push({name});
    console.log(classes);
  }
}
