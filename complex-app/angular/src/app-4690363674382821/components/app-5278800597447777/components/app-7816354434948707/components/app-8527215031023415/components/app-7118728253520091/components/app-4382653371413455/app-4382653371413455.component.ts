import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-4382653371413455',
  standalone: true,
  templateUrl: './app-4382653371413455.component.html',
  styleUrl: './app-4382653371413455.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App4382653371413455Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
