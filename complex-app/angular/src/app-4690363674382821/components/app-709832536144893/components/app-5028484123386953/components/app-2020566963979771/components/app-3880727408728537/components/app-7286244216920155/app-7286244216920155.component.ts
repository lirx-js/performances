import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-7286244216920155',
  standalone: true,
  templateUrl: './app-7286244216920155.component.html',
  styleUrl: './app-7286244216920155.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App7286244216920155Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
