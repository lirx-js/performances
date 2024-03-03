import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-8557054857520569',
  standalone: true,
  templateUrl: './app-8557054857520569.component.html',
  styleUrl: './app-8557054857520569.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App8557054857520569Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
