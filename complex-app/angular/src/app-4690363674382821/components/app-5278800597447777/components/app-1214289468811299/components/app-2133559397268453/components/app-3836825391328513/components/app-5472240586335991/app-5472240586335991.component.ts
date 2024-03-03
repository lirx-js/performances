import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-5472240586335991',
  standalone: true,
  templateUrl: './app-5472240586335991.component.html',
  styleUrl: './app-5472240586335991.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App5472240586335991Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
