import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-8562521662579275',
  standalone: true,
  templateUrl: './app-8562521662579275.component.html',
  styleUrl: './app-8562521662579275.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App8562521662579275Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
