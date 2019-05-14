import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ExampleService } from '../services/example.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
   user = { name:"pedro perez",uid:"xxxxxxxxxxxxxxxxxxxxxx",email:'rapepe027@gmail.com'};
   list = [
    { name:"pedro perez",uid:"xxxxxxxxxxxxxxxxxxxxxx",email:'rapepe027@gmail.com'},
    { name:"pedro perez",uid:"xxxxxxxxxxxxxxxxxxxxxx",email:'rapepe027@gmail.com'},
    { name:"pedro perez",uid:"xxxxxxxxxxxxxxxxxxxxxx",email:'rapepe027@gmail.com'},
    { name:"pedro perez",uid:"xxxxxxxxxxxxxxxxxxxxxx",email:'rapepe027@gmail.com'}
   ];
  constructor(
    private router:Router,
    private exampleService:ExampleService
  ){}

  goReceiver(){
    this.exampleService.sendObjectSource(this.user);
    this.exampleService.sendListSource(this.list);
    this.router.navigate(['/receiver']);
  }
}
