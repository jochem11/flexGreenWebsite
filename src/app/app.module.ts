import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JwtInterceptor, ErrorInterceptor } from './_helpers';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AccountComponent } from './components/account/account.component';
import { BrowserComponent } from './components/browser/browser.component';
import { P1_dayChartComponent } from './components/charts/p1_day-chart/p1_day-chart.component';
import { P1_weekChartComponent } from './components/charts/p1_week-chart/p1_week-chart.component';
import { P1_monthChartComponent } from './components/charts/p1_month-chart/p1_month-chart.component';
import { P1_yearChartComponent } from './components/charts/p1_year-chart/p1_year-chart.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { Error404Component } from './components/error404/error404.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SettingsComponent } from './components/settings/settings.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { UsersComponent } from './components/users/users.component';
import { NgChartsModule } from 'ng2-charts';
import { LiveFeedComponent } from './components/live-feed/live-feed.component';
import { DatePipe } from '@angular/common';
import { CustomDateAdapter } from './_helpers/CustomDateAdapter';

//material
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatSliderModule} from '@angular/material/slider';
import {MatMenuModule} from '@angular/material/menu';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatStepperModule} from '@angular/material/stepper';
import {MatTabsModule} from '@angular/material/tabs';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatChipsModule} from '@angular/material/chips';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatNativeDateModule, DateAdapter} from '@angular/material/core';
import { P1Component } from './components/dashboard/p1/p1.component';
import { RelayComponent } from './components/dashboard/relay/relay.component';
import { PulseComponent } from './components/dashboard/pulse/pulse.component';
import { TempComponent } from './components/dashboard/temp/temp.component';
import { MBusComponent } from './components/dashboard/m-bus/m-bus.component';
import { ModbusComponent } from './components/dashboard/modbus/modbus.component';


@NgModule({
  declarations: [
    AppComponent,
    AccountComponent,
    BrowserComponent,
    P1_dayChartComponent,
    P1_weekChartComponent,
    P1_monthChartComponent,
    P1_yearChartComponent,
    DashboardComponent,
    Error404Component,
    LoginComponent,
    NavbarComponent,
    SettingsComponent,
    SidenavComponent,
    UsersComponent,
    LiveFeedComponent,
    P1Component,
    RelayComponent,
    PulseComponent,
    TempComponent,
    MBusComponent,
    ModbusComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgChartsModule,
    MatCheckboxModule,
    MatButtonModule,
    MatInputModule,
    MatAutocompleteModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatRadioModule,
    MatSelectModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatStepperModule,
    MatTabsModule,
    MatExpansionModule,
    MatButtonToggleModule,
    MatChipsModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatDialogModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    HttpClientModule,
    MatNativeDateModule,

  ],
  providers: [
    DatePipe,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    { provide: DateAdapter, useClass: CustomDateAdapter}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
