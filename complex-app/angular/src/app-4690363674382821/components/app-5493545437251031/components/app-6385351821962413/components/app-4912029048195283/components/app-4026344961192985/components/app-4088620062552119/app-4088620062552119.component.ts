import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-4088620062552119',
  standalone: true,
  templateUrl: './app-4088620062552119.component.html',
  styleUrl: './app-4088620062552119.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App4088620062552119Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
