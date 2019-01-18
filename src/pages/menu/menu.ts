import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {
  checkout:any = {};

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  print(){
    let cadena:string = this.checkout.amount; 
    
    (<any>window).sunmiInnerPrinter.printerInit()
        .then(function(any) {
          (<any>window).sunmiInnerPrinter.printString("Mount " + cadena)
            .then(function(any){
              alert("algo " + any);
            })
            .catch(function(err){
              alert("Error " + err);
            })
        })
        .catch(function(err){
          alert("Error " + err);
        })
  }

}
