import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-7765660380876393',
  standalone: true,
  templateUrl: './app-7765660380876393.component.html',
  styleUrl: './app-7765660380876393.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App7765660380876393Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
