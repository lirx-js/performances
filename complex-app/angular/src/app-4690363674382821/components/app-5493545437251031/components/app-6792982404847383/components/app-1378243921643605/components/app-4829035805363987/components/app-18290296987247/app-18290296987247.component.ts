import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-18290296987247',
  standalone: true,
  templateUrl: './app-18290296987247.component.html',
  styleUrl: './app-18290296987247.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App18290296987247Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
