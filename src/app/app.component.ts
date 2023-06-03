import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 data = '';


  display(item:any){
    console.log(item);
    this.data+=item
    
  }

  clearScreen(){
    this.data=''
  }


  calculate(){
    try{
    this.data=eval(this.data).toFixed(4)}
catch(eror){
this.data='error'
};

  }

}
