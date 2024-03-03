import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-1615531570736255',
  standalone: true,
  templateUrl: './app-1615531570736255.component.html',
  styleUrl: './app-1615531570736255.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App1615531570736255Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
