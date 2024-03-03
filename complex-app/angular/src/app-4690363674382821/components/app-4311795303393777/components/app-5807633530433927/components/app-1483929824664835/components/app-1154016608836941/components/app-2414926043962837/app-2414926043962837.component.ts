import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-2414926043962837',
  standalone: true,
  templateUrl: './app-2414926043962837.component.html',
  styleUrl: './app-2414926043962837.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App2414926043962837Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
