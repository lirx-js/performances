import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-6867439792453899',
  standalone: true,
  templateUrl: './app-6867439792453899.component.html',
  styleUrl: './app-6867439792453899.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App6867439792453899Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
