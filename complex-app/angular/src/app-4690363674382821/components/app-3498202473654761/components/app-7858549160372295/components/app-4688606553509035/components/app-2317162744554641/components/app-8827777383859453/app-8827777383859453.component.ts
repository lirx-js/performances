import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-8827777383859453',
  standalone: true,
  templateUrl: './app-8827777383859453.component.html',
  styleUrl: './app-8827777383859453.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App8827777383859453Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
