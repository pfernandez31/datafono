import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../../pages/home/home';

@Component({
  selector: 'page-principal',
  templateUrl: 'principal.html'
})
export class PrincipalPage {
  checkout:any = {};


  constructor(public nav: NavController) {
  	this.checkout.amount = '';
  }

  back(){
  	this.checkout.amount = '';
  }

  clear(){
  	let cadena:string = this.checkout.amount; 
  	this.checkout.amount = cadena.substr(0, cadena.length-1);;
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

  sum(valor){
  	this.checkout.amount += valor;
  }



}
