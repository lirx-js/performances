import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-2307419139315025',
  standalone: true,
  templateUrl: './app-2307419139315025.component.html',
  styleUrl: './app-2307419139315025.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App2307419139315025Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
