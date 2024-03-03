import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-8286359790559621',
  standalone: true,
  templateUrl: './app-8286359790559621.component.html',
  styleUrl: './app-8286359790559621.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App8286359790559621Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
