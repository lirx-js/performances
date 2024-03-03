import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-7126099990172991',
  standalone: true,
  templateUrl: './app-7126099990172991.component.html',
  styleUrl: './app-7126099990172991.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App7126099990172991Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
