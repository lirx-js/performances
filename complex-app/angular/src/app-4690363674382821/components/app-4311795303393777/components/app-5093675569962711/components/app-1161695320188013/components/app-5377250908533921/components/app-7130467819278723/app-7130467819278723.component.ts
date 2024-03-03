import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-7130467819278723',
  standalone: true,
  templateUrl: './app-7130467819278723.component.html',
  styleUrl: './app-7130467819278723.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App7130467819278723Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
