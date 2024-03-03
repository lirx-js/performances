import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-4572892669733853',
  standalone: true,
  templateUrl: './app-4572892669733853.component.html',
  styleUrl: './app-4572892669733853.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App4572892669733853Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
