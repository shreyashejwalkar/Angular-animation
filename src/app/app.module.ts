import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OpenCloseComponent } from './open-close/open-close.component';
import { MaterialModule } from './materials/materials.module';
import { StatusSliderComponent } from './status-slider/status-slider.component';
import { EnterLeaveComponent } from './enter-leave/enter-leave.component';
import { HeroListEnterLeaveComponent } from './hero-list-enter-leave/hero-list-enter-leave.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    routingComponents,
    AboutComponent,
    OpenCloseComponent,
    StatusSliderComponent,
    EnterLeaveComponent,
    HeroListEnterLeaveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
