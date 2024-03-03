import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-193245707075851',
  standalone: true,
  templateUrl: './app-193245707075851.component.html',
  styleUrl: './app-193245707075851.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App193245707075851Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
