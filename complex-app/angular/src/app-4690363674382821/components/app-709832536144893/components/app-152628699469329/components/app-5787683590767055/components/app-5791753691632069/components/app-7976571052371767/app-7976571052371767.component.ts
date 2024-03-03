import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-7976571052371767',
  standalone: true,
  templateUrl: './app-7976571052371767.component.html',
  styleUrl: './app-7976571052371767.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App7976571052371767Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
