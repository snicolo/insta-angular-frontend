import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TagComponent } from './tag/tag.component';
import { PlaceComponent } from './place/place.component';
import { HomeComponent } from './home/home.component';
import { FeedComponent } from './feed/feed.component';

//routing 
const routes: Routes = [
  { path:  '', 
  component: HomeComponent,
  pathMatch:  'full' },
{
    path:  'tag',
    component:  TagComponent
},
{
  path:  'place',
  component: PlaceComponent
},
{
  path: 'feed',
  component: FeedComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
