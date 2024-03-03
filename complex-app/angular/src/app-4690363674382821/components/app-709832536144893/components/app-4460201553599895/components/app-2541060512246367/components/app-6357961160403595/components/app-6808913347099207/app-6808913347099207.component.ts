import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-6808913347099207',
  standalone: true,
  templateUrl: './app-6808913347099207.component.html',
  styleUrl: './app-6808913347099207.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App6808913347099207Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
