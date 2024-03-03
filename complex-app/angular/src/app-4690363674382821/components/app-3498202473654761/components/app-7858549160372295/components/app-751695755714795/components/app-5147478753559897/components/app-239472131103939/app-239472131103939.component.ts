import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-239472131103939',
  standalone: true,
  templateUrl: './app-239472131103939.component.html',
  styleUrl: './app-239472131103939.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App239472131103939Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
