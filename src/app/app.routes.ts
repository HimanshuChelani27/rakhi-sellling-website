import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { CategoryComponent } from './category/category.component';

export const routes: Routes = [

    { path:'details', component: DetailsComponent},
    {path: 'category', component: CategoryComponent},
    {path:'', redirectTo:'category', pathMatch:'full'}
];

