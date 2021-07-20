import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriaCreateComponent } from './components/view/categoria/categoria-create/categoria-create.component';
import { CategoriaDeleteComponent } from './components/view/categoria/categoria-delete/categoria-delete.component';
import { CategoriaReadComponent } from './components/view/categoria/categoria-read/categoria-read.component';
import { CategoriaUpdateComponent } from './components/view/categoria/categoria-update/categoria-update.component';
import { HomeComponent } from './components/view/home/home.component';
import { LivroCreateComponent } from './components/view/livro/livro-create/livro-create.component';
import { LivroDeleteComponent } from './components/view/livro/livro-delete/livro-delete.component';
import { LivroReadAllComponent } from './components/view/livro/livro-read-all/livro-read-all.component';
import { LivroReadComponent } from './components/view/livro/livro-read/livro-read.component';
import { LivroUpdateComponent } from './components/view/livro/livro-update/livro-update.component';

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
    },

    {
        path: 'categoria/update/:id',
        component: CategoriaUpdateComponent
    },
    {
        path: 'categoria/:id_cat/livro',
        component: LivroReadAllComponent
    },
    {
        path: 'categoria/:id_cat/livro/create',
        component: LivroCreateComponent
    },

    {
        path:'categoria/:id_cat/livro/:id/update',
        component: LivroUpdateComponent
    },

    {
        path:'categoria/:id_cat/livro/:id/delete',
        component: LivroDeleteComponent
    },

    {
        path:'categoria/:id_cat/livro/:id/read',
        component: LivroReadComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
