import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-4951284657337705',
  standalone: true,
  templateUrl: './app-4951284657337705.component.html',
  styleUrl: './app-4951284657337705.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App4951284657337705Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
