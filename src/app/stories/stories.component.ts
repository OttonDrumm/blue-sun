import { Component } from '@angular/core';

import { stories } from '../resources/ts/stories';

@Component({
  selector: 'app-product-list',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.css']
})
export class StoriesComponent {
  stories = stories;

  share() {
    window.alert('Storie caricate!');
  }
}