import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  private preferences = {darkMode: false};

  constructor(private _location: Location) { }

  ngOnInit() {
    let storagePreferences = localStorage.getItem("preferences");
    if (storagePreferences != null){
      this.preferences = JSON.parse(storagePreferences);
    }
  }

  backClicked() {
    this._location.back();
  }

  toggleTheme(event) {
    if(event.detail.checked){
      document.body.setAttribute('data-theme', 'dark');
      this.preferences.darkMode = true;
    }
    else{
      document.body.setAttribute('data-theme', 'light');
      this.preferences.darkMode = false;
    }
  }

  ngOnDestroy(){
    localStorage.setItem('preferences', JSON.stringify(this.preferences));
  }
}
