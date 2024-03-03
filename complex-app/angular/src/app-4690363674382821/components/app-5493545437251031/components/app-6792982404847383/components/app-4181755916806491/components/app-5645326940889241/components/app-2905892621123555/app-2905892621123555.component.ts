import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-2905892621123555',
  standalone: true,
  templateUrl: './app-2905892621123555.component.html',
  styleUrl: './app-2905892621123555.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App2905892621123555Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
