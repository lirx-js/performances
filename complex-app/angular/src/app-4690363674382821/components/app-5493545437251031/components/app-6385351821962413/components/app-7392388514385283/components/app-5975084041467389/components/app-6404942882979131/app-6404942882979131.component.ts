import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-6404942882979131',
  standalone: true,
  templateUrl: './app-6404942882979131.component.html',
  styleUrl: './app-6404942882979131.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App6404942882979131Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
