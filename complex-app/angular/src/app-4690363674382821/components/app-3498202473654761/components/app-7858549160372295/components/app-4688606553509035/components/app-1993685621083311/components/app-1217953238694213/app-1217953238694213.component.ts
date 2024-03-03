import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-1217953238694213',
  standalone: true,
  templateUrl: './app-1217953238694213.component.html',
  styleUrl: './app-1217953238694213.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App1217953238694213Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
