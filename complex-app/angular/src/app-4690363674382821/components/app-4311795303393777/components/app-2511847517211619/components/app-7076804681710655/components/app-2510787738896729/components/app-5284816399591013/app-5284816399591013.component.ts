import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-5284816399591013',
  standalone: true,
  templateUrl: './app-5284816399591013.component.html',
  styleUrl: './app-5284816399591013.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App5284816399591013Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
