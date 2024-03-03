import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-1121378003263441',
  standalone: true,
  templateUrl: './app-1121378003263441.component.html',
  styleUrl: './app-1121378003263441.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App1121378003263441Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
