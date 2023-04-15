import { Component } from '@angular/core';
import { IonicModule, Platform } from '@ionic/angular';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [IonicModule, ExploreContainerComponent, RouterModule, FormsModule],
})
export class Tab1Page {
  
  constructor(public platform: Platform) {}

  mode = 'auto';

  updateMode(event: Event) {
    console.log(this.mode);
    // document.body.classList.add(this.platform.is('ios') ? 'ios' : 'md');
    document.body.classList.remove('dark');
    document.body.classList.remove('light');
    if (this.mode !== 'auto') {
      document.body.classList.add(this.mode);
    }
  }
}
