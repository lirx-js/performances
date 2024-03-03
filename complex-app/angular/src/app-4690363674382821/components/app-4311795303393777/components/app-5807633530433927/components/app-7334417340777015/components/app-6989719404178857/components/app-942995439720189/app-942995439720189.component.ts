import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-942995439720189',
  standalone: true,
  templateUrl: './app-942995439720189.component.html',
  styleUrl: './app-942995439720189.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App942995439720189Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
