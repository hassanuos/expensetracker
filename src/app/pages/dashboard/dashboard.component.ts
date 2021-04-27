import {Component, OnDestroy, OnInit} from '@angular/core';
import { ModalController } from '@ionic/angular';
import {AddExpenseComponent} from '../../shared/components/add-expense/add-expense.component';
import {DataService} from "../../services/data/data.service";
import {ExpenseInterface} from "../../interface/expenseinterface";
import {ActionService} from "../../services/action/action.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit, OnDestroy {

    expenses: ExpenseInterface[];
  constructor(
      private modalController: ModalController,
      private dataService: DataService,
      private actionService: ActionService
  ) {
      this.expenses = [];
      this.actionService.getTodayExpenses().then((val) => this.expenses = val);
  }

  ngOnDestroy(): void {
      throw new Error('Method not implemented.');
  }

  ngOnInit() {
      this.dataService.getExpensesSubscription().subscribe(
          {
              next: (expense) => {
                  if (expense != null) {
                      this.expenses.push(expense);
                  }
              },
              error: err => { console.log(err) },
              complete: () => {}
          }
      )
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: AddExpenseComponent,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }

}
