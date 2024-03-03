import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-9003835482207655',
  standalone: true,
  templateUrl: './app-9003835482207655.component.html',
  styleUrl: './app-9003835482207655.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App9003835482207655Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
