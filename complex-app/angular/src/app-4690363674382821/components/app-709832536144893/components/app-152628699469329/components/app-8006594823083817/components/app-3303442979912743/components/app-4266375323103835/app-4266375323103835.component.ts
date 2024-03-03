import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-4266375323103835',
  standalone: true,
  templateUrl: './app-4266375323103835.component.html',
  styleUrl: './app-4266375323103835.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App4266375323103835Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
