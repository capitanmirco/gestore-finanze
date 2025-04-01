import { Component, OnInit } from '@angular/core';
import { Chart } from 'highcharts';
import {MatCard, MatCardContent, MatCardHeader, MatCardTitle} from "@angular/material/card";
import {CurrencyPipe, NgForOf} from "@angular/common";
import {HighchartsChartModule} from "highcharts-angular";
import Highcharts from 'highcharts';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  imports: [
    MatCard,
    MatCardTitle,
    MatCardHeader,
    NgForOf,
    MatCardContent,
    HighchartsChartModule,
    CurrencyPipe
  ],
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  totalIncome: number = 0;
  totalExpense: number = 0;
  fixedExpenses: number = 0;
  remainingBalance: number = 0;

  // Example data for charts
  incomeData = [5000, 4500, 6000, 5500, 7000]; // Monthly income data
  expenseData = [2000, 1500, 1800, 1700, 2200]; // Monthly expenses data

  incomeChartOptions = {
    chart: {
      type: 'line'
    },
    title: {
      text: 'Entrate Mensili'
    },
    xAxis: {
      categories: ['Gen', 'Feb', 'Mar', 'Apr', 'Mag']
    },
    series: [{
      name: 'Entrate',
      data: this.incomeData
    }]
  };

  expenseChartOptions = {
    chart: {
      type: 'line'
    },
    title: {
      text: 'Uscite Mensili'
    },
    xAxis: {
      categories: ['Gen', 'Feb', 'Mar', 'Apr', 'Mag']
    },
    series: [{
      name: 'Uscite',
      data: this.expenseData
    }]
  };

  financialSummary = [
    { title: 'Entrate Totali', value: 0 },
    { title: 'Uscite Totali', value: 0 },
    { title: 'Spese Fisse', value: 1500 },
    { title: 'Saldo Rimanente', value: 0 }
  ];

  ngOnInit(): void {
    this.calculateFinances();
  }

  calculateFinances(): void {
    this.totalIncome = this.incomeData.reduce((acc, val) => acc + val, 0);
    this.totalExpense = this.expenseData.reduce((acc, val) => acc + val, 0);
    this.fixedExpenses = 1500; // Example fixed expenses
    this.remainingBalance = this.totalIncome - this.totalExpense - this.fixedExpenses;

    this.financialSummary[0].value = this.totalIncome;
    this.financialSummary[1].value = this.totalExpense;
    this.financialSummary[3].value = this.remainingBalance;
  }

  protected readonly Highcharts = Highcharts;
}
