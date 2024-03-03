import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-1112177916049347',
  standalone: true,
  templateUrl: './app-1112177916049347.component.html',
  styleUrl: './app-1112177916049347.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App1112177916049347Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
