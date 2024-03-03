import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-3892379422245361',
  standalone: true,
  templateUrl: './app-3892379422245361.component.html',
  styleUrl: './app-3892379422245361.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App3892379422245361Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
