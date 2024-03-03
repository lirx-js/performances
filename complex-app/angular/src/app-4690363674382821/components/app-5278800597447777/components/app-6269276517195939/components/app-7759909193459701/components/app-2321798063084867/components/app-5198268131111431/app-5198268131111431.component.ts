import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-5198268131111431',
  standalone: true,
  templateUrl: './app-5198268131111431.component.html',
  styleUrl: './app-5198268131111431.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App5198268131111431Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
