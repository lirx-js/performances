import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-2204542727914233',
  standalone: true,
  templateUrl: './app-2204542727914233.component.html',
  styleUrl: './app-2204542727914233.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App2204542727914233Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
