import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-4555070780716873',
  standalone: true,
  templateUrl: './app-4555070780716873.component.html',
  styleUrl: './app-4555070780716873.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App4555070780716873Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
