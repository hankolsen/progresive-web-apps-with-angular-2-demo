import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {HttpModule} from "@angular/http";
import {FormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {BookingStatusPipe} from "./booking-status.pipe";
import {FlightSearchComponent} from "./flightsearch.component";
import {MdCardModule, MdButtonModule, MdIconModule, MdToolbarModule, MdSidenavModule, MdListModule} from "@angular/material";

@NgModule({
    imports: [
        BrowserAnimationsModule,
        BrowserModule,
        HttpModule,
        FormsModule,
        MdButtonModule,
        MdCardModule,
        MdIconModule,
        MdListModule,
        MdSidenavModule,
        MdToolbarModule
    ],
    declarations: [
        BookingStatusPipe, FlightSearchComponent
    ],
    providers: [
    ],
    bootstrap: [
      FlightSearchComponent
    ]
})
export class AppModule {
}
