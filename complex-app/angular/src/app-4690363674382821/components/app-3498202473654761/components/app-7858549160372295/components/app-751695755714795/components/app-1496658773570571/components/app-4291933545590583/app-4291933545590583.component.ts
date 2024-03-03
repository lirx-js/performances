import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-4291933545590583',
  standalone: true,
  templateUrl: './app-4291933545590583.component.html',
  styleUrl: './app-4291933545590583.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App4291933545590583Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
