import { NgxPageScrollCoreModule } from 'ngx-page-scroll-core';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import {MatButtonModule} from '@angular/material/button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServerComponent } from './component/server/server.component';
import { ServersComponent } from './component/servers/servers.component';
import { PhotoLensComponent } from './component/photo-lens/photo-lens.component';
import { OnePageSrollComponent } from './component/one-page-sroll/one-page-sroll.component';
import { PhotoContainerComponent } from './component/photo-container/photo-container.component';
import { RootComponent } from './component/root/root.component';
import { SideBarComponent } from './component/side-bar/side-bar.component';
import { FakeIDEComponent } from './component/fakeIDE/fakeIDE.component';
import { AnimationComponent } from './component/animation/animation.component';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CvComponent } from './component/cv/cv.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    PhotoLensComponent,
    RootComponent,
    SideBarComponent,
    PhotoContainerComponent,
    FakeIDEComponent,
    OnePageSrollComponent,
    AnimationComponent,
    CvComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    BrowserAnimationsModule,
    NgxPageScrollCoreModule.forRoot(),
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
