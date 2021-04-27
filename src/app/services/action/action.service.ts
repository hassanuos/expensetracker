import { Injectable } from '@angular/core';
import {DataService} from '../data/data.service';
import {ExpenseInterface} from '../../interface/expenseinterface';
import {StorageService} from "../storage/storage.service";
import {DatetimeService} from "../datetime/datetime.service";

@Injectable({
  providedIn: 'root'
})
export class ActionService {

  // demoExpense : ExpenseInterface;
  constructor(private dataService: DataService, private storageService: StorageService, private dateTimeService: DatetimeService) {
    // this.demoExpense = {
    //   amount: 50,
    //   description: 'This is demo description',
    //   type: 'general',
    //   createdOn: new Date()
    // };
    // this.testFunc();
  }

  // testFunc(){
  //   this.dataService.setExpenses([this.demoExpense]).then(() => [
  //     this.dataService.getExpenses().then((val: ExpenseInterface[]) => {
  //       console.log(val);
  //     })
  //   ]);
  // }

    async createExpense(expense: ExpenseInterface): Promise<void>{
        const key = this.dateTimeService.getDateTimeISO(expense.createdOn);
        this.storageService.saveExpenseToLocal(expense);
        this.dataService.setExpenses(expense);
    }

    async getTodayExpenses(): Promise<ExpenseInterface[]>{
      return await this.storageService.getExpensesFromLocal().then((expenses: ExpenseInterface[]) => {
        return expenses;
      });
    }
}
