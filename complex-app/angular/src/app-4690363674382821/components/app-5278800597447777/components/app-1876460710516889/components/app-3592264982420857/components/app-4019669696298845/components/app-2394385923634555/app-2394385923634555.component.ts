import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-2394385923634555',
  standalone: true,
  templateUrl: './app-2394385923634555.component.html',
  styleUrl: './app-2394385923634555.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App2394385923634555Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
