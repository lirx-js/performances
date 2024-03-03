import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-4165081612423075',
  standalone: true,
  templateUrl: './app-4165081612423075.component.html',
  styleUrl: './app-4165081612423075.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App4165081612423075Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
