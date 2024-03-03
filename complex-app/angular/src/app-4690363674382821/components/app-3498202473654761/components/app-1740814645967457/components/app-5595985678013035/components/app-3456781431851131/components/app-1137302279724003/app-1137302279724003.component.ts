import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-1137302279724003',
  standalone: true,
  templateUrl: './app-1137302279724003.component.html',
  styleUrl: './app-1137302279724003.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App1137302279724003Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
