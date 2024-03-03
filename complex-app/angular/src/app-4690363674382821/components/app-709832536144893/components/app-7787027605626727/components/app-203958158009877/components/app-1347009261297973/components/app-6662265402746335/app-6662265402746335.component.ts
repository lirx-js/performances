import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-6662265402746335',
  standalone: true,
  templateUrl: './app-6662265402746335.component.html',
  styleUrl: './app-6662265402746335.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App6662265402746335Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
