import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-1263230419956277',
  standalone: true,
  templateUrl: './app-1263230419956277.component.html',
  styleUrl: './app-1263230419956277.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App1263230419956277Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
