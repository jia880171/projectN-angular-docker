import { NgxPageScrollCoreModule } from 'ngx-page-scroll-core';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServerComponent } from './component/server/server.component';
import { ServersComponent } from './component/servers/servers.component';
import { PhotoLensComponent } from './component/photo-lens/photo-lens.component';
import { OnePageSrollComponent } from './component/one-page-sroll/one-page-sroll.component';

import { TestComponent } from './component/test/test.component';
import { SideBarComponent } from './component/side-bar/side-bar.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PhotoContainerComponent } from './component/photo-container/photo-container.component';
import { ProfileComponent } from './component/profile/profile.component';
import { AnimationComponent } from './component/animation/animation.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    PhotoLensComponent,
    TestComponent,
    SideBarComponent,
    PhotoContainerComponent,
    ProfileComponent,
    OnePageSrollComponent,
    AnimationComponent,
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
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
