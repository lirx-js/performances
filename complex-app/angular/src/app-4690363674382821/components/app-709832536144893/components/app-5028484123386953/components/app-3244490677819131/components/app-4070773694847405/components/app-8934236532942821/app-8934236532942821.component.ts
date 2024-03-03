import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-8934236532942821',
  standalone: true,
  templateUrl: './app-8934236532942821.component.html',
  styleUrl: './app-8934236532942821.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App8934236532942821Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
