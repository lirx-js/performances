import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-8213883039941077',
  standalone: true,
  templateUrl: './app-8213883039941077.component.html',
  styleUrl: './app-8213883039941077.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App8213883039941077Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
