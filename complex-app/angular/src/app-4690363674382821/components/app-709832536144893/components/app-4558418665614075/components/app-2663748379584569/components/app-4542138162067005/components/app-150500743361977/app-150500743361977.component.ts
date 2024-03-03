import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-150500743361977',
  standalone: true,
  templateUrl: './app-150500743361977.component.html',
  styleUrl: './app-150500743361977.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App150500743361977Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
