import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { HeaderComponent } from "./components/template/header/header.component";
import { NavComponent } from "./components/template/nav/nav.component";
import { FooterComponent } from "./components/template/footer/footer.component";
import { HomeComponent } from "./components/view/home/home.component";
import { CategoriaReadComponent } from "./components/view/categoria/categoria-read/categoria-read.component";
import { CategoriaCreateComponent } from "./components/view/categoria/categoria-create/categoria-create.component";
import { LivroReadAllComponent } from "./components/view/livro/livro-read-all/livro-read-all.component";
import { LivroCreateComponent } from "./components/view/livro/livro-create/livro-create.component";
import { LivroUpdateComponent } from "./components/view/livro/livro-update/livro-update.component";

import { MatToolbarModule } from "@angular/material/toolbar";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatListModule } from "@angular/material/list";
import { MatIconModule } from "@angular/material/icon";
import { MatCardModule } from "@angular/material/card";
import { MatTableModule } from "@angular/material/table";
import { MatButtonModule } from "@angular/material/button";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { CategoriaDeleteComponent } from "./components/view/categoria/categoria-delete/categoria-delete.component";
import { CategoriaUpdateComponent } from "./components/view/categoria/categoria-update/categoria-update.component";
import { LivroDeleteComponent } from './components/view/livro/livro-delete/livro-delete.component';
import { LivroReadComponent } from './components/view/livro/livro-read/livro-read.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    CategoriaReadComponent,
    CategoriaCreateComponent,
    CategoriaDeleteComponent,
    CategoriaUpdateComponent,
    LivroReadAllComponent,
    LivroCreateComponent,
    LivroUpdateComponent,
    LivroDeleteComponent,
    LivroReadComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatCardModule,
    MatTableModule,
    HttpClientModule,
    MatButtonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    MatSnackBarModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
