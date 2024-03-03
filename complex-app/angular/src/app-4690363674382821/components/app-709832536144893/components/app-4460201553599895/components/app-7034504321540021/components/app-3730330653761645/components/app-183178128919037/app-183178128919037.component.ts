import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-183178128919037',
  standalone: true,
  templateUrl: './app-183178128919037.component.html',
  styleUrl: './app-183178128919037.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App183178128919037Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
