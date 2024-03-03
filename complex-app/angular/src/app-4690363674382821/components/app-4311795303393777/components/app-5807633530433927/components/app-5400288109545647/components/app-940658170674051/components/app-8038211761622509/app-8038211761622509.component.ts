import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-8038211761622509',
  standalone: true,
  templateUrl: './app-8038211761622509.component.html',
  styleUrl: './app-8038211761622509.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App8038211761622509Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
