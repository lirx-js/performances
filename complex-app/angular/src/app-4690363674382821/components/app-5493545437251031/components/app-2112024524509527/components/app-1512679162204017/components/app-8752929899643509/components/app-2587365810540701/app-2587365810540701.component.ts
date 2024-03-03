import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-2587365810540701',
  standalone: true,
  templateUrl: './app-2587365810540701.component.html',
  styleUrl: './app-2587365810540701.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App2587365810540701Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
