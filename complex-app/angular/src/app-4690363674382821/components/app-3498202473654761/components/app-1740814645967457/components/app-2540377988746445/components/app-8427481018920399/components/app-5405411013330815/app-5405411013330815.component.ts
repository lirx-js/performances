import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-5405411013330815',
  standalone: true,
  templateUrl: './app-5405411013330815.component.html',
  styleUrl: './app-5405411013330815.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App5405411013330815Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
