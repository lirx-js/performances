import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-8917545920596069',
  standalone: true,
  templateUrl: './app-8917545920596069.component.html',
  styleUrl: './app-8917545920596069.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App8917545920596069Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
