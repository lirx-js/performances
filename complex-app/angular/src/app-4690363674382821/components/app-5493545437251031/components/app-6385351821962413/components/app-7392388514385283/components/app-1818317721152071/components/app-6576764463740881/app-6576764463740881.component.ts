import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-6576764463740881',
  standalone: true,
  templateUrl: './app-6576764463740881.component.html',
  styleUrl: './app-6576764463740881.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App6576764463740881Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
