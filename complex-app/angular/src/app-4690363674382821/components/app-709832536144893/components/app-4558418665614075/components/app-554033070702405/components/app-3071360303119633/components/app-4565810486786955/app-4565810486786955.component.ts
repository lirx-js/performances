import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-4565810486786955',
  standalone: true,
  templateUrl: './app-4565810486786955.component.html',
  styleUrl: './app-4565810486786955.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App4565810486786955Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
