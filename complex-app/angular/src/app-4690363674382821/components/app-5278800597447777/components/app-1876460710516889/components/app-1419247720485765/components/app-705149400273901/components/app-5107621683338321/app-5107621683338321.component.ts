import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-5107621683338321',
  standalone: true,
  templateUrl: './app-5107621683338321.component.html',
  styleUrl: './app-5107621683338321.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App5107621683338321Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
