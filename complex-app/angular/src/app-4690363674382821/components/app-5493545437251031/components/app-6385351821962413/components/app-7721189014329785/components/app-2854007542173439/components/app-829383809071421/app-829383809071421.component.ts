import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-829383809071421',
  standalone: true,
  templateUrl: './app-829383809071421.component.html',
  styleUrl: './app-829383809071421.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App829383809071421Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
