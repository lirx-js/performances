import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-2261922467580165',
  standalone: true,
  templateUrl: './app-2261922467580165.component.html',
  styleUrl: './app-2261922467580165.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App2261922467580165Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
