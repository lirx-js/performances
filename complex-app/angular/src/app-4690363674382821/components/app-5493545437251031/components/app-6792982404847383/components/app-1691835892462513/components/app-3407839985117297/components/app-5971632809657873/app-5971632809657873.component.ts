import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-5971632809657873',
  standalone: true,
  templateUrl: './app-5971632809657873.component.html',
  styleUrl: './app-5971632809657873.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App5971632809657873Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
