import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-3932274839965011',
  standalone: true,
  templateUrl: './app-3932274839965011.component.html',
  styleUrl: './app-3932274839965011.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App3932274839965011Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
