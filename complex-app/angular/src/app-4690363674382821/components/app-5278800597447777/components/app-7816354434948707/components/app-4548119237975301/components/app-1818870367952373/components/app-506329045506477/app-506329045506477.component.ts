import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-506329045506477',
  standalone: true,
  templateUrl: './app-506329045506477.component.html',
  styleUrl: './app-506329045506477.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App506329045506477Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
