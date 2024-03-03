import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-6136607972948145',
  standalone: true,
  templateUrl: './app-6136607972948145.component.html',
  styleUrl: './app-6136607972948145.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App6136607972948145Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
