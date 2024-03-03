import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-1181151419380209',
  standalone: true,
  templateUrl: './app-1181151419380209.component.html',
  styleUrl: './app-1181151419380209.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App1181151419380209Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
