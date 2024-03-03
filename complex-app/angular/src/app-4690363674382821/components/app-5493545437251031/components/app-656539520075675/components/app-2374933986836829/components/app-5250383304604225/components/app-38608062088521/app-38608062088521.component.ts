import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-38608062088521',
  standalone: true,
  templateUrl: './app-38608062088521.component.html',
  styleUrl: './app-38608062088521.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App38608062088521Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
