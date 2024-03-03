import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-8234299361784029',
  standalone: true,
  templateUrl: './app-8234299361784029.component.html',
  styleUrl: './app-8234299361784029.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App8234299361784029Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
