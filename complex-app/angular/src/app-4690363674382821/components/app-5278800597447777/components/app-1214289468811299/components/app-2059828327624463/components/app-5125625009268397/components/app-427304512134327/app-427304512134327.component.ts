import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-427304512134327',
  standalone: true,
  templateUrl: './app-427304512134327.component.html',
  styleUrl: './app-427304512134327.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App427304512134327Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
