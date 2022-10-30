import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import {MatButtonModule} from '@angular/material/button';
import { MaterializeButtonModule } from 'materialize-angular';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { OwlModule } from 'ngx-owl-carousel';  
import { CountUpModule } from 'ngx-countup';
import { NgwWowModule } from 'ngx-wow';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import HomeComponent from './home/home.component';
import { NavigationComponent } from './navigation/navigation.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { VtuSectionComponent } from './vtu-section/vtu-section.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './footer/footer.component';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { PortalComponent } from './portal/portal.component'
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavigationComponent,
    LoginComponent,
    SignupComponent,
    VtuSectionComponent,
    FooterComponent,
    PortalComponent,
  ],
  imports: [
  //MatButtonModule,
    HttpClientModule,
    ReactiveFormsModule,
    OwlModule,
    CarouselModule,
    MaterializeButtonModule,
    // MatDialogModule,
    NgwWowModule,
    CountUpModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
   ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
