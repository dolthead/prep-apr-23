import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import modeService from '../services/dark-mode-service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [IonicModule, ExploreContainerComponent, RouterModule, FormsModule],
})
export class Tab1Page {

  constructor() {
    this.mode = modeService.getMode();
  }

  mode = 'auto';

  updateMode() {
    modeService.updateMode(this.mode);
  }
}
