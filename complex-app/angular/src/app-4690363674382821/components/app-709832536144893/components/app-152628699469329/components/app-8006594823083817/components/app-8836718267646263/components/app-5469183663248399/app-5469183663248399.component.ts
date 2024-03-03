import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-5469183663248399',
  standalone: true,
  templateUrl: './app-5469183663248399.component.html',
  styleUrl: './app-5469183663248399.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App5469183663248399Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
