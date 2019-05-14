import { Component, OnInit } from '@angular/core';
import { ExampleService } from '../services/example.service';

@Component({
  selector: 'app-receiver',
  templateUrl: './receiver.page.html',
  styleUrls: ['./receiver.page.scss'],
})
export class ReceiverPage implements OnInit {
  user:any;

  constructor(
    private exampleService:ExampleService
  ) { }

  ngOnInit() {
    this.exampleService.$getObjectSource.subscribe(data => {
      console.log(data)
      this.user = data;
    }).unsubscribe();

    this.exampleService.$getListSource.subscribe(list => console.log(list)).unsubscribe();
  }

}
