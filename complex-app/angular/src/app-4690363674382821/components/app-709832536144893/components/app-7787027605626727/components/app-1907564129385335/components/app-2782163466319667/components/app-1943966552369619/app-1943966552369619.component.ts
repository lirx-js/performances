import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-1943966552369619',
  standalone: true,
  templateUrl: './app-1943966552369619.component.html',
  styleUrl: './app-1943966552369619.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App1943966552369619Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
