import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-6867481403647737',
  standalone: true,
  templateUrl: './app-6867481403647737.component.html',
  styleUrl: './app-6867481403647737.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App6867481403647737Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
