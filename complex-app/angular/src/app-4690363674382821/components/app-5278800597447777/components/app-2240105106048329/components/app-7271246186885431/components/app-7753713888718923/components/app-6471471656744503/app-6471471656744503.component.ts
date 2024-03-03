import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-6471471656744503',
  standalone: true,
  templateUrl: './app-6471471656744503.component.html',
  styleUrl: './app-6471471656744503.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App6471471656744503Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
