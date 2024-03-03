import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-5454102393219335',
  standalone: true,
  templateUrl: './app-5454102393219335.component.html',
  styleUrl: './app-5454102393219335.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App5454102393219335Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
