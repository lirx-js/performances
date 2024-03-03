import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-3697894057987995',
  standalone: true,
  templateUrl: './app-3697894057987995.component.html',
  styleUrl: './app-3697894057987995.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App3697894057987995Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
