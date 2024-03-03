import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-534901024265215',
  standalone: true,
  templateUrl: './app-534901024265215.component.html',
  styleUrl: './app-534901024265215.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App534901024265215Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
