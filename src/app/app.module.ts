import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlaceComponent } from './place/place.component';
import { TagComponent } from './tag/tag.component';
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'
import { ReactiveFormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    PlaceComponent,
    TagComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
  
   
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey:''
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
