import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-7612599091524489',
  standalone: true,
  templateUrl: './app-7612599091524489.component.html',
  styleUrl: './app-7612599091524489.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App7612599091524489Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
