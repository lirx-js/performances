import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-98790602517655',
  standalone: true,
  templateUrl: './app-98790602517655.component.html',
  styleUrl: './app-98790602517655.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App98790602517655Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
