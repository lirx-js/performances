import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-3874107096212631',
  standalone: true,
  templateUrl: './app-3874107096212631.component.html',
  styleUrl: './app-3874107096212631.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App3874107096212631Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
