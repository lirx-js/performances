import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-2806745106864361',
  standalone: true,
  templateUrl: './app-2806745106864361.component.html',
  styleUrl: './app-2806745106864361.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App2806745106864361Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
