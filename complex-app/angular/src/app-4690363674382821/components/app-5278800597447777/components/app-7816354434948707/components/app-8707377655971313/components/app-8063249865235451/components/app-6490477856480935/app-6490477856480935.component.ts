import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-6490477856480935',
  standalone: true,
  templateUrl: './app-6490477856480935.component.html',
  styleUrl: './app-6490477856480935.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App6490477856480935Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
