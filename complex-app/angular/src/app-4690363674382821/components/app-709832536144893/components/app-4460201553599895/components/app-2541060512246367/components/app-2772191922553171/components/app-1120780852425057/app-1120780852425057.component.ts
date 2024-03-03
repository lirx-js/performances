import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-1120780852425057',
  standalone: true,
  templateUrl: './app-1120780852425057.component.html',
  styleUrl: './app-1120780852425057.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App1120780852425057Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
