import { storiesOf, moduleMetadata } from '@storybook/angular';
//import {storiesOf} from '@storybook/polymer';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppModule } from './../app.module';
import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from '../app-routing.module';
import { SignUpComponent } from './sign-up.component';

storiesOf('Sign Up', module)
    .addDecorator(
        moduleMetadata({
            imports: [BrowserAnimationsModule, ReactiveFormsModule, HttpClientModule, AppRoutingModule, AppModule],
            schemas: [
                CUSTOM_ELEMENTS_SCHEMA
            ],
            declarations: [
                // LoginStoryComponent
            ],
            providers: [{ provide: APP_BASE_HREF, useValue: '/' }]
        })
    )
    .add(
        'Sign Up',
        () => ({
            component: SignUpComponent,
            // template: `
            // <div style="padding: 3rem;">
            // <h1>Test component</h1>
            // <app-login></app-login>
            // <div>
            // `
        }),
        // {
        //     // notes
        // }
    );