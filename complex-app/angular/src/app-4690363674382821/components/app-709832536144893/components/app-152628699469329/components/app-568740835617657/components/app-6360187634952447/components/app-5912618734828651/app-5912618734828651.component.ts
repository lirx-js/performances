import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-5912618734828651',
  standalone: true,
  templateUrl: './app-5912618734828651.component.html',
  styleUrl: './app-5912618734828651.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App5912618734828651Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
