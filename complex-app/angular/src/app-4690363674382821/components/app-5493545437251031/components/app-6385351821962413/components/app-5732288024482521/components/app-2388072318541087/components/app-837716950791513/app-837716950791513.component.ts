import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-837716950791513',
  standalone: true,
  templateUrl: './app-837716950791513.component.html',
  styleUrl: './app-837716950791513.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App837716950791513Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
