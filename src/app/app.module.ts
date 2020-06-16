import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { StoriesComponent } from './stories/stories.component';
import { StoryDetailsComponent } from './story-detail/story-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    StoriesComponent,
    StoryDetailsComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: StoriesComponent },
      { path: 'stories/:storyId', component: StoryDetailsComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
