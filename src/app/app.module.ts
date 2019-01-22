import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { PrincipalPage } from "../pages/principal/principal";
import { MenuPage } from "../pages/menu/menu";
import { ConfigPage } from "../pages/config/config";
import { EstadisticaPage } from "../pages/estadistica/estadistica";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    PrincipalPage,
    MenuPage,
    ConfigPage,
    EstadisticaPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    PrincipalPage,
    MenuPage,
    ConfigPage,
    EstadisticaPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
