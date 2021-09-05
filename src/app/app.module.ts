import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ContactsComponent } from './contacts/contacts.component';
import { EmailAddressesComponent } from './email-addresses/email-addresses.component';
import { AppInterceptor } from './Services/services-interceptor';
import { FilterPipe } from './filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    EmailAddressesComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: AppInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
