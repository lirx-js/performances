import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-5323555058047069',
  standalone: true,
  templateUrl: './app-5323555058047069.component.html',
  styleUrl: './app-5323555058047069.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App5323555058047069Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
