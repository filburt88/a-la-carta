import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import {MatFormFieldModule} from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ReactiveFormsModule } from '@angular/forms';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input'
import { MatDialogModule } from '@angular/material/dialog';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatMenuModule} from '@angular/material/menu';



import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { NetworkInterceptor } from './interceptors/network.interceptor';
import { DishComponent } from './components/dish/dish.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { ModalDishComponent } from './components/modal-dish/modal-dish.component';
import { MyMenuComponent } from './components/my-menu/my-menu.component';
import { MyMenuStatsComponent } from './components/my-menu-stats/my-menu-stats.component';
import { MyMenuPageComponent } from './pages/my-menu-page/my-menu-page.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginSnackbarComponent } from './components/login-snackbar/login-snackbar.component';
import { DishAddSnackbarComponent } from './components/dish-add-snackbar/dish-add-snackbar.component';
import { DishDeleteSnackbarComponent } from './components/dish-delete-snackbar/dish-delete-snackbar.component';
import { PaginatePipe } from './pipes/paginate.pipe';
import { PricePipe } from './pipes/price.pipe';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginFormComponent,
    DishComponent,
    SearchBarComponent,
    ModalDishComponent,
    MyMenuComponent,
    MyMenuStatsComponent,
    MyMenuPageComponent,
    HomeComponent,
    LoginSnackbarComponent,
    DishAddSnackbarComponent,
    DishDeleteSnackbarComponent,
    PaginatePipe,
    PricePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    SweetAlert2Module,
    MatProgressSpinnerModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatInputModule,
    MatDialogModule,
    MatSnackBarModule,
    MatPaginatorModule,
    MatMenuModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: NetworkInterceptor,
    multi: true,
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
