import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-5351406546319001',
  standalone: true,
  templateUrl: './app-5351406546319001.component.html',
  styleUrl: './app-5351406546319001.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App5351406546319001Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
