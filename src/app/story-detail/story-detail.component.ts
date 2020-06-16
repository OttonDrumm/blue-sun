import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { stories } from '../resources/ts/stories';

@Component({
    selector: 'blue-sun',
    templateUrl: './story-detail.component.html'
})
export class StoryDetailsComponent implements OnInit {
    story;
  
    constructor(
      private route: ActivatedRoute,
    ) { }
    
    ngOnInit() {
        this.route.paramMap.subscribe(params => {
            this.story = stories[params.get('storyId')];
        });
    }
}