import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-1694461707265577',
  standalone: true,
  templateUrl: './app-1694461707265577.component.html',
  styleUrl: './app-1694461707265577.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App1694461707265577Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
