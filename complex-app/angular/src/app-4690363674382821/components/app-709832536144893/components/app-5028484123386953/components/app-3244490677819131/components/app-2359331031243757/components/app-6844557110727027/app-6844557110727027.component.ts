import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-6844557110727027',
  standalone: true,
  templateUrl: './app-6844557110727027.component.html',
  styleUrl: './app-6844557110727027.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App6844557110727027Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
