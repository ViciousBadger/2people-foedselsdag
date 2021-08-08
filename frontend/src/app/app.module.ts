import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { SuiModule } from '@richardlt/ng2-semantic-ui';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { FoesListComponent } from './foes-list/foes-list.component';
import { MessagesComponent } from './messages/messages.component';

@NgModule({
    declarations: [
        AppComponent,
        FoesListComponent,
        MessagesComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        AppRoutingModule,
        SuiModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
