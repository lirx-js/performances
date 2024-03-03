import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-6595854602852755',
  standalone: true,
  templateUrl: './app-6595854602852755.component.html',
  styleUrl: './app-6595854602852755.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App6595854602852755Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
