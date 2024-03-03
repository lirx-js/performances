import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-1455546863480963',
  standalone: true,
  templateUrl: './app-1455546863480963.component.html',
  styleUrl: './app-1455546863480963.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App1455546863480963Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
