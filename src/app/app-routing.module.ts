import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriaCreateComponent } from './components/view/categoria/categoria-create/categoria-create.component';
import { CategoriaDeleteComponent } from './components/view/categoria/categoria-delete/categoria-delete.component';
import { CategoriaReadComponent } from './components/view/categoria/categoria-read/categoria-read.component';
import { HomeComponent } from './components/view/home/home.component';

const routes: Routes = [
    {   
        path: '', 
        component: HomeComponent 
    },
    {
        path: 'categoria',
        component: CategoriaReadComponent
    },
    {
        path: 'categoria/create',
        component: CategoriaCreateComponent
    },

    {
        path: 'categoria/delete/:id',
        component: CategoriaDeleteComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
