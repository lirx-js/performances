import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-7563347921379751',
  standalone: true,
  templateUrl: './app-7563347921379751.component.html',
  styleUrl: './app-7563347921379751.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App7563347921379751Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
