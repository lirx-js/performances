import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-1370818351448821',
  standalone: true,
  templateUrl: './app-1370818351448821.component.html',
  styleUrl: './app-1370818351448821.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App1370818351448821Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
