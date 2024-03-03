import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-3031968857848815',
  standalone: true,
  templateUrl: './app-3031968857848815.component.html',
  styleUrl: './app-3031968857848815.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App3031968857848815Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
