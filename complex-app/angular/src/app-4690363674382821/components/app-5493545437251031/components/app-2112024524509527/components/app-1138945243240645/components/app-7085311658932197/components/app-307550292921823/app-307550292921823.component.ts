import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-307550292921823',
  standalone: true,
  templateUrl: './app-307550292921823.component.html',
  styleUrl: './app-307550292921823.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App307550292921823Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
