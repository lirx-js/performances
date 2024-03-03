import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-4310339716584287',
  standalone: true,
  templateUrl: './app-4310339716584287.component.html',
  styleUrl: './app-4310339716584287.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App4310339716584287Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
