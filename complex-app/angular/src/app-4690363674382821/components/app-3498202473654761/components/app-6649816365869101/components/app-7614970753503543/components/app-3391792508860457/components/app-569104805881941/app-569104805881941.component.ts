import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-569104805881941',
  standalone: true,
  templateUrl: './app-569104805881941.component.html',
  styleUrl: './app-569104805881941.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App569104805881941Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
