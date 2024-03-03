import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-4980812650404927',
  standalone: true,
  templateUrl: './app-4980812650404927.component.html',
  styleUrl: './app-4980812650404927.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App4980812650404927Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
