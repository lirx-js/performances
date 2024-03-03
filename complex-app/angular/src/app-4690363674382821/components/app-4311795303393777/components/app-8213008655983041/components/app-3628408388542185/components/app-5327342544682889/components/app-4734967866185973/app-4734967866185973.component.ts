import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-4734967866185973',
  standalone: true,
  templateUrl: './app-4734967866185973.component.html',
  styleUrl: './app-4734967866185973.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App4734967866185973Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
