import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-1369973366695495',
  standalone: true,
  templateUrl: './app-1369973366695495.component.html',
  styleUrl: './app-1369973366695495.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App1369973366695495Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
