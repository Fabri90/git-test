import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'git-test';

  masterClick(ev: any) {
    console.log("masterClick");
    console.log(ev);
  }
}

