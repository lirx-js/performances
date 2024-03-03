import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-6274568983270249',
  standalone: true,
  templateUrl: './app-6274568983270249.component.html',
  styleUrl: './app-6274568983270249.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App6274568983270249Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
