import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-635939883342827',
  standalone: true,
  templateUrl: './app-635939883342827.component.html',
  styleUrl: './app-635939883342827.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App635939883342827Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
