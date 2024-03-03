import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-1344281133261463',
  standalone: true,
  templateUrl: './app-1344281133261463.component.html',
  styleUrl: './app-1344281133261463.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App1344281133261463Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
