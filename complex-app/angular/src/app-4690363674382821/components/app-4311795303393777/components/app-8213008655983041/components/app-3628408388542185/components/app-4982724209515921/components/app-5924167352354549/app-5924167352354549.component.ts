import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-5924167352354549',
  standalone: true,
  templateUrl: './app-5924167352354549.component.html',
  styleUrl: './app-5924167352354549.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App5924167352354549Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
