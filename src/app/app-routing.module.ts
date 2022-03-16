import { TestComponent } from './component/test/test.component';
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
    children: [
      {
        path: 'servers',
        component: ServersComponent,
      },
      {
        path: 'photoLens',
        component: PhotoLensComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
