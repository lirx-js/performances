import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-258327761531067',
  standalone: true,
  templateUrl: './app-258327761531067.component.html',
  styleUrl: './app-258327761531067.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App258327761531067Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
