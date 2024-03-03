import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-7075542065618377',
  standalone: true,
  templateUrl: './app-7075542065618377.component.html',
  styleUrl: './app-7075542065618377.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App7075542065618377Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
