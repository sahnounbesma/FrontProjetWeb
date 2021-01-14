import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';

import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';

import { ComponentsModule } from './components/components.module';
import { ExamplesModule } from './examples/examples.module';



import {HttpClientModule} from '@angular/common/http';
import {UsersApiService} from './users/users-api.service';
import {BiensApiService} from './biens/biens-api.service';
import {LocalStorageService} from './LocalStorage.service';
import { StorageServiceModule } from 'ngx-webstorage-service';
import { IonicStorageModule } from '@ionic/storage';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    RouterModule,
    ComponentsModule,
    ExamplesModule,
    AppRoutingModule,
    HttpClientModule,
    StorageServiceModule,
    IonicStorageModule.forRoot(),
  ],
  providers: [UsersApiService, BiensApiService, LocalStorageService,TokenInterceptorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
