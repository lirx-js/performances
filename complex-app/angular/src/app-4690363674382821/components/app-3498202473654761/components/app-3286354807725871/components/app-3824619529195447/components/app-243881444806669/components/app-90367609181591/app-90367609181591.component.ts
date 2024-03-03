import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-90367609181591',
  standalone: true,
  templateUrl: './app-90367609181591.component.html',
  styleUrl: './app-90367609181591.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App90367609181591Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
