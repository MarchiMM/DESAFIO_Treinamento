import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavComponent } from './nav/nav.component';
import { PersonComponent } from './person/person.component';
import { MainComponent } from './main/main.component';
import { TrainingroomComponent } from './trainingroom/trainingroom.component';
import { TrainingroompersonComponent } from './trainingroomperson/trainingroomperson.component';
import { RestroomComponent } from './restroom/restroom.component';
import { RestroompersonComponent } from './restroomperson/restroomperson.component';
import { StagetimeComponent } from './stagetime/stagetime.component';
import { ResttimeComponent } from './resttime/resttime.component';
import { TitleComponent } from './title/title.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [										
    AppComponent,
      NavComponent,
      PersonComponent,
      MainComponent,
      TrainingroomComponent,
      TrainingroompersonComponent,
      RestroomComponent,
      RestroompersonComponent,
      StagetimeComponent,
      ResttimeComponent,
      TitleComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    BsDropdownModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
