import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-5843790367799591',
  standalone: true,
  templateUrl: './app-5843790367799591.component.html',
  styleUrl: './app-5843790367799591.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App5843790367799591Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
