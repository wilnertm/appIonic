import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPage } from '../pages/login/login';
import {TabMenuModule} from 'primeng/tabmenu';
import {MenuItem} from 'primeng/api';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  LoginPage = "/login"
  rootPage:any = LoginPage
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  items: MenuItem[];
    
  activeItem: MenuItem;

  ngOnInit() {
      this.items = [
          {label: 'Stats', icon: 'fa fa-fw fa-bar-chart'},
          {label: 'Calendar', icon: 'fa fa-fw fa-calendar'},
          {label: 'Documentation', icon: 'fa fa-fw fa-book'},
          {label: 'Support', icon: 'fa fa-fw fa-support'},
          {label: 'Social', icon: 'fa fa-fw fa-twitter'}
      ];
      
      this.activeItem = this.items[2];
  }
}
