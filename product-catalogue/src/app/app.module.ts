import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppRoutingModule } from './app-routing.module';

import { ProductsReducer } from './products/store/products.reducer';
import { ProductsListEffect } from './products/store/products.effects';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { InteriorPageComponent } from './core/components/interior-page/interior-page.component';
import { HeaderComponent } from './core/header/header.component';
import { SignUpComponent } from './sign-up/sign-up.component';

import { CoreService } from './../app/core/service/core.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    InteriorPageComponent,
    HeaderComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot({ ProductsReducer },
      {
        runtimeChecks: {
          strictStateImmutability: false,
          strictActionImmutability: false,
        }
      }),
    EffectsModule.forRoot([ProductsListEffect]),
    StoreDevtoolsModule.instrument({
      name: 'Store DevTools',
    }),
  ],
  providers: [CoreService],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule { }
