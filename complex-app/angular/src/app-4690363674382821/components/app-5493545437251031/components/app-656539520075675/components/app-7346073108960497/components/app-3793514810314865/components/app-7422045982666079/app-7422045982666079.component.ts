import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-7422045982666079',
  standalone: true,
  templateUrl: './app-7422045982666079.component.html',
  styleUrl: './app-7422045982666079.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App7422045982666079Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
