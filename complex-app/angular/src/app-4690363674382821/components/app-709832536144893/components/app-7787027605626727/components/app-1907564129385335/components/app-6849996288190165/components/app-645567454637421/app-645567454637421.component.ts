import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-645567454637421',
  standalone: true,
  templateUrl: './app-645567454637421.component.html',
  styleUrl: './app-645567454637421.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App645567454637421Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
