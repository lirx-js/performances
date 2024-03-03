import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-8690030340266327',
  standalone: true,
  templateUrl: './app-8690030340266327.component.html',
  styleUrl: './app-8690030340266327.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App8690030340266327Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
