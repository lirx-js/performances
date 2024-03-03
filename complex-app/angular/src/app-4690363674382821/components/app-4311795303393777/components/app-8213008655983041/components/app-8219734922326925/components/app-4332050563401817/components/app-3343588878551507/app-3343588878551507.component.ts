import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-3343588878551507',
  standalone: true,
  templateUrl: './app-3343588878551507.component.html',
  styleUrl: './app-3343588878551507.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App3343588878551507Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
