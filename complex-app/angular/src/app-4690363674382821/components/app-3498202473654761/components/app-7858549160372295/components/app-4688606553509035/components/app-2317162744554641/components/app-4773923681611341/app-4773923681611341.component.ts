import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-4773923681611341',
  standalone: true,
  templateUrl: './app-4773923681611341.component.html',
  styleUrl: './app-4773923681611341.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App4773923681611341Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
