import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-4785228806133191',
  standalone: true,
  templateUrl: './app-4785228806133191.component.html',
  styleUrl: './app-4785228806133191.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App4785228806133191Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
