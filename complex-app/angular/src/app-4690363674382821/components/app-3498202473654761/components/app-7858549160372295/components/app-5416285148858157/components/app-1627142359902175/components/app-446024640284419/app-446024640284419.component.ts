import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-446024640284419',
  standalone: true,
  templateUrl: './app-446024640284419.component.html',
  styleUrl: './app-446024640284419.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App446024640284419Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
