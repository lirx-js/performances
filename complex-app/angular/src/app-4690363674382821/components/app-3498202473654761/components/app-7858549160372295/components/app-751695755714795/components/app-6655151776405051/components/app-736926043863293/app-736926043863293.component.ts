import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-736926043863293',
  standalone: true,
  templateUrl: './app-736926043863293.component.html',
  styleUrl: './app-736926043863293.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App736926043863293Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
