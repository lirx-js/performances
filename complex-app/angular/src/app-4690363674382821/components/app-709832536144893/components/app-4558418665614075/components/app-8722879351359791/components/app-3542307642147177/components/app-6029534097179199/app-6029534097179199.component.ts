import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-6029534097179199',
  standalone: true,
  templateUrl: './app-6029534097179199.component.html',
  styleUrl: './app-6029534097179199.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App6029534097179199Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
