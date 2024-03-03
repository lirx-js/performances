import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-6815793843792581',
  standalone: true,
  templateUrl: './app-6815793843792581.component.html',
  styleUrl: './app-6815793843792581.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App6815793843792581Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
