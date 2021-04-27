import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AddExpenseComponent} from './add-expense/add-expense.component';
import {IonicModule} from '@ionic/angular';
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [AddExpenseComponent],
  imports: [
    CommonModule,
    IonicModule,
    ReactiveFormsModule
  ],
  bootstrap: [AddExpenseComponent]
})
export class SharedModule { }
