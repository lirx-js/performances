import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-2615629472447191',
  standalone: true,
  templateUrl: './app-2615629472447191.component.html',
  styleUrl: './app-2615629472447191.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App2615629472447191Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
