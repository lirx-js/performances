import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-164238035095727',
  standalone: true,
  templateUrl: './app-164238035095727.component.html',
  styleUrl: './app-164238035095727.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App164238035095727Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
