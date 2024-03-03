import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-5823245414154401',
  standalone: true,
  templateUrl: './app-5823245414154401.component.html',
  styleUrl: './app-5823245414154401.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App5823245414154401Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
