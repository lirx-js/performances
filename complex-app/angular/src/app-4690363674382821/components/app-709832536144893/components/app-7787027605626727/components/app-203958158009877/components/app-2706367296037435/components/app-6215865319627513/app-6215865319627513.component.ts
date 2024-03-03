import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-6215865319627513',
  standalone: true,
  templateUrl: './app-6215865319627513.component.html',
  styleUrl: './app-6215865319627513.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App6215865319627513Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
