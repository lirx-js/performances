import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-688945175657763',
  standalone: true,
  templateUrl: './app-688945175657763.component.html',
  styleUrl: './app-688945175657763.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App688945175657763Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
