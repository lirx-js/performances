import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-8003004200398685',
  standalone: true,
  templateUrl: './app-8003004200398685.component.html',
  styleUrl: './app-8003004200398685.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App8003004200398685Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
