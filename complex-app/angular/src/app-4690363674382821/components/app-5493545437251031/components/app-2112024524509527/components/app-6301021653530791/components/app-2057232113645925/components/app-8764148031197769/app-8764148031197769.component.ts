import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-8764148031197769',
  standalone: true,
  templateUrl: './app-8764148031197769.component.html',
  styleUrl: './app-8764148031197769.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App8764148031197769Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
