import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-5286884498061923',
  standalone: true,
  templateUrl: './app-5286884498061923.component.html',
  styleUrl: './app-5286884498061923.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App5286884498061923Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
