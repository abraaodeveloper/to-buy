import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/home', icon: 'home' },
    { title: 'Current cart', url: '/currentcart', icon: 'bag-handle' },
    { title: 'Carts', url: '/carts', icon: 'albums' },
    { title: 'settings', url: '/settings', icon: 'settings' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {
    let storagePreferences = localStorage.getItem("preferences");
    if (storagePreferences != null){
      let pref = JSON.parse(storagePreferences);
      if(pref.darkMode){
        document.body.setAttribute('data-theme', 'dark');
      }
      else{
        document.body.setAttribute('data-theme', 'light');
      }
    }
  }


}
