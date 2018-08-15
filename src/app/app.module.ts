// Core
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
// Components
import { AppComponent } from './app.component';
import { StickyHeaderComponent } from './components/sticky-header.component';
import { MenuComponent } from './components/menu.component';
import { AboutMePage } from './pages/aboutme/about-me.page';

@NgModule({
  declarations: [
    AppComponent,
    // Components
    StickyHeaderComponent,
    MenuComponent,
    // Pages
    AboutMePage
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
