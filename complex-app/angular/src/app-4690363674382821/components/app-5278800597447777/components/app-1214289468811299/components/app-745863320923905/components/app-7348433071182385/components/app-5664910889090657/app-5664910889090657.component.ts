import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-5664910889090657',
  standalone: true,
  templateUrl: './app-5664910889090657.component.html',
  styleUrl: './app-5664910889090657.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App5664910889090657Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
