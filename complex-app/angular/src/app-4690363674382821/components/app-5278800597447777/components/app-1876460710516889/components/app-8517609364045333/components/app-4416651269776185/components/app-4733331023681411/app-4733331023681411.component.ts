import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-4733331023681411',
  standalone: true,
  templateUrl: './app-4733331023681411.component.html',
  styleUrl: './app-4733331023681411.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App4733331023681411Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
