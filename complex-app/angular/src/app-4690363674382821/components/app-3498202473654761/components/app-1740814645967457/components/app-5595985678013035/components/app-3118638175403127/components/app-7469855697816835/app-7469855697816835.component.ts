import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-7469855697816835',
  standalone: true,
  templateUrl: './app-7469855697816835.component.html',
  styleUrl: './app-7469855697816835.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App7469855697816835Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
