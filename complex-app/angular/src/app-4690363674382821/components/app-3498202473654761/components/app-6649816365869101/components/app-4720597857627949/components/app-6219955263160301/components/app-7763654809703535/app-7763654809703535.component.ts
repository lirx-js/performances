import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-7763654809703535',
  standalone: true,
  templateUrl: './app-7763654809703535.component.html',
  styleUrl: './app-7763654809703535.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App7763654809703535Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
