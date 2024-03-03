import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-7259217459449067',
  standalone: true,
  templateUrl: './app-7259217459449067.component.html',
  styleUrl: './app-7259217459449067.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App7259217459449067Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
