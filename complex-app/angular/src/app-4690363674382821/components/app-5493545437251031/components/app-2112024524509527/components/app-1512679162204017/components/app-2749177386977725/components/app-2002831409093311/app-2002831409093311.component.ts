import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-2002831409093311',
  standalone: true,
  templateUrl: './app-2002831409093311.component.html',
  styleUrl: './app-2002831409093311.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App2002831409093311Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
