import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-1025996198971873',
  standalone: true,
  templateUrl: './app-1025996198971873.component.html',
  styleUrl: './app-1025996198971873.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App1025996198971873Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
