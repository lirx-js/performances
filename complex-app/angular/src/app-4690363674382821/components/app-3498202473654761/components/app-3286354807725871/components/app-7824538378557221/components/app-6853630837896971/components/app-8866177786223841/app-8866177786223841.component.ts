import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-8866177786223841',
  standalone: true,
  templateUrl: './app-8866177786223841.component.html',
  styleUrl: './app-8866177786223841.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App8866177786223841Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
