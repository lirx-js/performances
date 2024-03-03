import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-6195229937944825',
  standalone: true,
  templateUrl: './app-6195229937944825.component.html',
  styleUrl: './app-6195229937944825.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App6195229937944825Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
