import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-4257763028899163',
  standalone: true,
  templateUrl: './app-4257763028899163.component.html',
  styleUrl: './app-4257763028899163.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App4257763028899163Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
