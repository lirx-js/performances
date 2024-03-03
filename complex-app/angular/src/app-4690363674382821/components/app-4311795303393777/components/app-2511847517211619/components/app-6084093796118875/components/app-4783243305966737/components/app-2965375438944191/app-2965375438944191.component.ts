import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-2965375438944191',
  standalone: true,
  templateUrl: './app-2965375438944191.component.html',
  styleUrl: './app-2965375438944191.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App2965375438944191Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
