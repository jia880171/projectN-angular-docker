import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServerComponent } from './component/server/server.component';
import { ServersComponent } from './component/servers/servers.component';
import { PhotoLensComponent } from './component/photo-lens/photo-lens.component';
import { TestComponent } from './component/test/test.component';

@NgModule({
  declarations: [AppComponent, ServerComponent, ServersComponent, PhotoLensComponent, TestComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
