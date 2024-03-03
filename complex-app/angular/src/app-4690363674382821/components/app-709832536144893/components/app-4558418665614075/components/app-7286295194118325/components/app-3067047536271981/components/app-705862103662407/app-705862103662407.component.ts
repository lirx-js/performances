import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-705862103662407',
  standalone: true,
  templateUrl: './app-705862103662407.component.html',
  styleUrl: './app-705862103662407.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App705862103662407Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
