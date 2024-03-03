import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-8971704105890055',
  standalone: true,
  templateUrl: './app-8971704105890055.component.html',
  styleUrl: './app-8971704105890055.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App8971704105890055Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
