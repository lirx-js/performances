import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-8958455295128023',
  standalone: true,
  templateUrl: './app-8958455295128023.component.html',
  styleUrl: './app-8958455295128023.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App8958455295128023Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
