import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-3995022713883521',
  standalone: true,
  templateUrl: './app-3995022713883521.component.html',
  styleUrl: './app-3995022713883521.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App3995022713883521Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
