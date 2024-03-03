import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-8946525467547557',
  standalone: true,
  templateUrl: './app-8946525467547557.component.html',
  styleUrl: './app-8946525467547557.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App8946525467547557Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
