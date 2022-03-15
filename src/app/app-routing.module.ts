import { YoloDemoComponent } from './component/yolo-demo/yolo-demo.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: 'yoloDemo',
    component: YoloDemoComponent,
  },
  {
    path: '**',
    component: AppComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
