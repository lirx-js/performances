import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-5465302429851381',
  standalone: true,
  templateUrl: './app-5465302429851381.component.html',
  styleUrl: './app-5465302429851381.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App5465302429851381Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
