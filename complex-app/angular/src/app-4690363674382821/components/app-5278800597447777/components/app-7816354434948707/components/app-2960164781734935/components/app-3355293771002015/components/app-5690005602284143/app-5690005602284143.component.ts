import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-5690005602284143',
  standalone: true,
  templateUrl: './app-5690005602284143.component.html',
  styleUrl: './app-5690005602284143.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App5690005602284143Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
