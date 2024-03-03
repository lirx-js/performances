import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-24987701214945',
  standalone: true,
  templateUrl: './app-24987701214945.component.html',
  styleUrl: './app-24987701214945.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App24987701214945Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
