import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PrincipalPage } from "../principal/principal";
import { MenuPage } from "../../pages/menu/menu";
import { ConfigPage } from "../../pages/config/config";



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  tab1Root = MenuPage;
  tab2Root = PrincipalPage;
  tab3Root = ConfigPage;
  tab4Root = HomePage;
  constructor(public nav: NavController) { }


}
