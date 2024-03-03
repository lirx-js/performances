import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-8640308551557689',
  standalone: true,
  templateUrl: './app-8640308551557689.component.html',
  styleUrl: './app-8640308551557689.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App8640308551557689Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
