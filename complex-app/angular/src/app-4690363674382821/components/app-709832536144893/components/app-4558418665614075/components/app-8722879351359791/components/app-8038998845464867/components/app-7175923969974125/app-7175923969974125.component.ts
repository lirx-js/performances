import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-7175923969974125',
  standalone: true,
  templateUrl: './app-7175923969974125.component.html',
  styleUrl: './app-7175923969974125.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App7175923969974125Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
