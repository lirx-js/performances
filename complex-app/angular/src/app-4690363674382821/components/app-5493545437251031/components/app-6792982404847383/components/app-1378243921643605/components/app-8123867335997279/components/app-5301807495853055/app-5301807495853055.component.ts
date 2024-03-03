import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-5301807495853055',
  standalone: true,
  templateUrl: './app-5301807495853055.component.html',
  styleUrl: './app-5301807495853055.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App5301807495853055Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
