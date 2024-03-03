import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-7309282925293135',
  standalone: true,
  templateUrl: './app-7309282925293135.component.html',
  styleUrl: './app-7309282925293135.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App7309282925293135Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
