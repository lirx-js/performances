import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-188638394047953',
  standalone: true,
  templateUrl: './app-188638394047953.component.html',
  styleUrl: './app-188638394047953.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App188638394047953Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
