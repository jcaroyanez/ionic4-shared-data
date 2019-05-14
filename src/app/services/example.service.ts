import { Injectable } from '@angular/core';
import {  BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExampleService {
  private objectSource = new BehaviorSubject<{}>({});
  private listSource = new BehaviorSubject<any[]>([]);

  $getObjectSource = this.objectSource.asObservable();
  $getListSource = this.listSource.asObservable();

  constructor() { }

  sendObjectSource(data:any){
    this.objectSource.next(data);
  }

  sendListSource(list:any[]){
    this.listSource.next(list);
  }
}
