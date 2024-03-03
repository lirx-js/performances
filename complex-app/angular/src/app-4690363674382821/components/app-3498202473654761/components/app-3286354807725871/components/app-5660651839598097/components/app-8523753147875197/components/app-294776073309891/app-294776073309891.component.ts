import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-294776073309891',
  standalone: true,
  templateUrl: './app-294776073309891.component.html',
  styleUrl: './app-294776073309891.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App294776073309891Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
