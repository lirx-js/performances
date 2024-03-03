import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-3004082097915185',
  standalone: true,
  templateUrl: './app-3004082097915185.component.html',
  styleUrl: './app-3004082097915185.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App3004082097915185Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
