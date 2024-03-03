import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-7182723307142333',
  standalone: true,
  templateUrl: './app-7182723307142333.component.html',
  styleUrl: './app-7182723307142333.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App7182723307142333Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
