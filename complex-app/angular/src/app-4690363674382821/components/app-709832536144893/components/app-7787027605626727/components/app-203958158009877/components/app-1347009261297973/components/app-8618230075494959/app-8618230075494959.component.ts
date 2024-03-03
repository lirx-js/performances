import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-8618230075494959',
  standalone: true,
  templateUrl: './app-8618230075494959.component.html',
  styleUrl: './app-8618230075494959.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App8618230075494959Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
