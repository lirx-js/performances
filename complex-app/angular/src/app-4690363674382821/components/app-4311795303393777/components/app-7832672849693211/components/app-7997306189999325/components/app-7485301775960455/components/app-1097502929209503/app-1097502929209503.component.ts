import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-1097502929209503',
  standalone: true,
  templateUrl: './app-1097502929209503.component.html',
  styleUrl: './app-1097502929209503.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App1097502929209503Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
