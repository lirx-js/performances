import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-5783084445253967',
  standalone: true,
  templateUrl: './app-5783084445253967.component.html',
  styleUrl: './app-5783084445253967.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App5783084445253967Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
