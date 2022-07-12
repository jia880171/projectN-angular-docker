import { AnimationComponent } from './component/animation/animation.component';
import { OnePageSrollComponent } from './component/one-page-sroll/one-page-sroll.component';
import { FakeIDEComponent } from './component/fakeIDE/fakeIDE.component';
import { PhotoContainerComponent } from './component/photo-container/photo-container.component';
import { SideBarComponent } from './component/side-bar/side-bar.component';
import { RootComponent } from './component/root/root.component';
import { PhotoLensComponent } from './component/photo-lens/photo-lens.component';
import { ServersComponent } from './component/servers/servers.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'root',
    pathMatch: 'full',
  },
  {
    path: 'servers',
    component: AppComponent,
  },
  {
    path: 'root',
    component: RootComponent,
    children: [
      {
        path: '',
        redirectTo: 'fakeIDE',
        pathMatch: 'full',
      },
      {
        path: 'servers',
        component: ServersComponent,
      },
      {
        path: 'photoLens',
        component: PhotoLensComponent,
      },
      {
        path: 'photoContainer',
        component: PhotoContainerComponent,
      },
      {
        path: 'fakeIDE',
        component: FakeIDEComponent,
      },
      {
        path: 'onePageScroll',
        component: OnePageSrollComponent,
      },
      {
        path: 'animation',
        component: AnimationComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
