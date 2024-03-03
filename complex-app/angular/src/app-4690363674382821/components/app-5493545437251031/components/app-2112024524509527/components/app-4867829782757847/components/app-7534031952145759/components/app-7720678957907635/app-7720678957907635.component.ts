import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-7720678957907635',
  standalone: true,
  templateUrl: './app-7720678957907635.component.html',
  styleUrl: './app-7720678957907635.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App7720678957907635Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
