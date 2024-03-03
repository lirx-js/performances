import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-339633038849317',
  standalone: true,
  templateUrl: './app-339633038849317.component.html',
  styleUrl: './app-339633038849317.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App339633038849317Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
