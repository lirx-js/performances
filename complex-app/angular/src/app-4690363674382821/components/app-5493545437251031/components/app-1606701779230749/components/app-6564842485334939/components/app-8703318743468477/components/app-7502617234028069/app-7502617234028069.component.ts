import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-7502617234028069',
  standalone: true,
  templateUrl: './app-7502617234028069.component.html',
  styleUrl: './app-7502617234028069.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App7502617234028069Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
