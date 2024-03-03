import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-6920393414602327',
  standalone: true,
  templateUrl: './app-6920393414602327.component.html',
  styleUrl: './app-6920393414602327.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App6920393414602327Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
