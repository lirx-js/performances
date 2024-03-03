import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-7433094121317365',
  standalone: true,
  templateUrl: './app-7433094121317365.component.html',
  styleUrl: './app-7433094121317365.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App7433094121317365Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
