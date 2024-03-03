import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-2464621245573741',
  standalone: true,
  templateUrl: './app-2464621245573741.component.html',
  styleUrl: './app-2464621245573741.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App2464621245573741Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
