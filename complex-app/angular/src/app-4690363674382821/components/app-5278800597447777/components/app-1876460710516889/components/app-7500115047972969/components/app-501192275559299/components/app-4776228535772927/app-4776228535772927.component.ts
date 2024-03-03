import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-4776228535772927',
  standalone: true,
  templateUrl: './app-4776228535772927.component.html',
  styleUrl: './app-4776228535772927.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App4776228535772927Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
