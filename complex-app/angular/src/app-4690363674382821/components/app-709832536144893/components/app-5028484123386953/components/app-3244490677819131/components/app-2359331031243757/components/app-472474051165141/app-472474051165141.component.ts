import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-472474051165141',
  standalone: true,
  templateUrl: './app-472474051165141.component.html',
  styleUrl: './app-472474051165141.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App472474051165141Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
