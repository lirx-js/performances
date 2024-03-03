import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-8617974268028297',
  standalone: true,
  templateUrl: './app-8617974268028297.component.html',
  styleUrl: './app-8617974268028297.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App8617974268028297Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
