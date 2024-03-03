import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-8577485207913633',
  standalone: true,
  templateUrl: './app-8577485207913633.component.html',
  styleUrl: './app-8577485207913633.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App8577485207913633Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
