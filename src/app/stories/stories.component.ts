import { Component } from '@angular/core';

import { stories } from '../resources/ts/stories';

@Component({
  selector: 'blue-sun',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.css']
})
export class StoriesComponent {
  stories = stories;

  share() {
    window.alert('Storie caricate!');
  }
}