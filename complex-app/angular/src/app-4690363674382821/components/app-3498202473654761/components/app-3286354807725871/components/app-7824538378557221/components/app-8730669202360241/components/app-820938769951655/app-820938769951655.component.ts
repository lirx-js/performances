import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-820938769951655',
  standalone: true,
  templateUrl: './app-820938769951655.component.html',
  styleUrl: './app-820938769951655.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App820938769951655Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
