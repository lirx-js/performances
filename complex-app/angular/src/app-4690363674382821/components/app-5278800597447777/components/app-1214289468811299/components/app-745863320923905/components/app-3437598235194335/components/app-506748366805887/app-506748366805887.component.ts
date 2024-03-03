import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-506748366805887',
  standalone: true,
  templateUrl: './app-506748366805887.component.html',
  styleUrl: './app-506748366805887.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App506748366805887Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
