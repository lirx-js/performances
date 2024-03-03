import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-6366386211154437',
  standalone: true,
  templateUrl: './app-6366386211154437.component.html',
  styleUrl: './app-6366386211154437.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App6366386211154437Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
