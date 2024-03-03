import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-7447269010628963',
  standalone: true,
  templateUrl: './app-7447269010628963.component.html',
  styleUrl: './app-7447269010628963.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App7447269010628963Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
