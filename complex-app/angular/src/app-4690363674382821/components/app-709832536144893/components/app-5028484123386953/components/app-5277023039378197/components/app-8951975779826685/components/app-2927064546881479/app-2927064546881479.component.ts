import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-2927064546881479',
  standalone: true,
  templateUrl: './app-2927064546881479.component.html',
  styleUrl: './app-2927064546881479.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App2927064546881479Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
