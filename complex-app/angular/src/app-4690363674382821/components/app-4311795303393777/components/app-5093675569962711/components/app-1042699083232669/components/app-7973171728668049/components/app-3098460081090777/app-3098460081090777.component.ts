import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-3098460081090777',
  standalone: true,
  templateUrl: './app-3098460081090777.component.html',
  styleUrl: './app-3098460081090777.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App3098460081090777Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
