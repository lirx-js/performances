import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-3561938996554451',
  standalone: true,
  templateUrl: './app-3561938996554451.component.html',
  styleUrl: './app-3561938996554451.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App3561938996554451Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
