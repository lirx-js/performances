import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-760963550561285',
  standalone: true,
  templateUrl: './app-760963550561285.component.html',
  styleUrl: './app-760963550561285.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App760963550561285Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
