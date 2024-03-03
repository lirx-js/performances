import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-8939760647686857',
  standalone: true,
  templateUrl: './app-8939760647686857.component.html',
  styleUrl: './app-8939760647686857.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App8939760647686857Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
