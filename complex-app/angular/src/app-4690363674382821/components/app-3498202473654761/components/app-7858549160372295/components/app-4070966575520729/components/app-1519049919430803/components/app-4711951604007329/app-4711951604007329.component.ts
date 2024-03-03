import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-4711951604007329',
  standalone: true,
  templateUrl: './app-4711951604007329.component.html',
  styleUrl: './app-4711951604007329.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App4711951604007329Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
