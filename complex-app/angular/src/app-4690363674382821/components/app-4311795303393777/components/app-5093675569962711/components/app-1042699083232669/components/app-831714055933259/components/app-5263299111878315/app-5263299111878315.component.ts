import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-5263299111878315',
  standalone: true,
  templateUrl: './app-5263299111878315.component.html',
  styleUrl: './app-5263299111878315.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App5263299111878315Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
