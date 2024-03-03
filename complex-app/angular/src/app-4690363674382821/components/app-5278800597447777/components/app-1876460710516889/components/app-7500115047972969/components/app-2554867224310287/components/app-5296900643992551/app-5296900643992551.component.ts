import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-5296900643992551',
  standalone: true,
  templateUrl: './app-5296900643992551.component.html',
  styleUrl: './app-5296900643992551.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App5296900643992551Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
