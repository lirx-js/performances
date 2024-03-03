import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-4763372537787717',
  standalone: true,
  templateUrl: './app-4763372537787717.component.html',
  styleUrl: './app-4763372537787717.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App4763372537787717Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
