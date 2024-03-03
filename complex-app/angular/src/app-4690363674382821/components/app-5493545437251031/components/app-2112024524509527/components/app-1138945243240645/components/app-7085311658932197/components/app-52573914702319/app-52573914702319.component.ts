import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-52573914702319',
  standalone: true,
  templateUrl: './app-52573914702319.component.html',
  styleUrl: './app-52573914702319.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App52573914702319Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
