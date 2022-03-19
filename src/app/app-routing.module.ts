import { ProfileComponent } from './component/profile/profile.component';
import { PhotoContainerComponent } from './component/photo-container/photo-container.component';
import { SideBarComponent } from './component/side-bar/side-bar.component';
import { PhotoLensComponent } from './component/photo-lens/photo-lens.component';
import { ServersComponent } from './component/servers/servers.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: 'servers',
    component: AppComponent,
  },
  {
    path: 'test',
    component: SideBarComponent,
    children: [
      {
        path: 'servers',
        component: ServersComponent,
      },
      {
        path: 'photoLens',
        component: PhotoLensComponent,
      },{
        path: 'photoContainer',
        component: PhotoContainerComponent,
      },{
        path: 'profile',
        component: ProfileComponent,
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
