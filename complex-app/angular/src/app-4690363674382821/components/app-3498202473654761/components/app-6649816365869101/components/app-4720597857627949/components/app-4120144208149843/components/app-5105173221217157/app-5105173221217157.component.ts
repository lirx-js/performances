import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-5105173221217157',
  standalone: true,
  templateUrl: './app-5105173221217157.component.html',
  styleUrl: './app-5105173221217157.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App5105173221217157Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
