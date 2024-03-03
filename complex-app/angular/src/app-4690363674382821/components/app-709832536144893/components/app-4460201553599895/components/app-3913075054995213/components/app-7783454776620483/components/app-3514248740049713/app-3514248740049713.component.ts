import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-3514248740049713',
  standalone: true,
  templateUrl: './app-3514248740049713.component.html',
  styleUrl: './app-3514248740049713.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App3514248740049713Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
