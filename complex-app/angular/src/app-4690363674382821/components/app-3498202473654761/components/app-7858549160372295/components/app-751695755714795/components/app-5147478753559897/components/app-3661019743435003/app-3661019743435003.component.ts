import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-3661019743435003',
  standalone: true,
  templateUrl: './app-3661019743435003.component.html',
  styleUrl: './app-3661019743435003.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App3661019743435003Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
