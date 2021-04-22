import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {BudgetComponent} from "./budget.component";
import {IonicModule} from "@ionic/angular";


const budgetRoutes : Routes = [
  {
    path: '',
    component: BudgetComponent
  }
];

@NgModule({
  declarations: [BudgetComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(budgetRoutes),
    IonicModule
  ]
})
export class BudgetModule { }
