import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-4304687397123867',
  standalone: true,
  templateUrl: './app-4304687397123867.component.html',
  styleUrl: './app-4304687397123867.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App4304687397123867Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
