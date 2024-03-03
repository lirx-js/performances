import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-3360858376712733',
  standalone: true,
  templateUrl: './app-3360858376712733.component.html',
  styleUrl: './app-3360858376712733.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App3360858376712733Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
