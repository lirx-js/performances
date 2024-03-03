import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-1485467645042195',
  standalone: true,
  templateUrl: './app-1485467645042195.component.html',
  styleUrl: './app-1485467645042195.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App1485467645042195Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
