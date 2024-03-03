import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-8603196797547221',
  standalone: true,
  templateUrl: './app-8603196797547221.component.html',
  styleUrl: './app-8603196797547221.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App8603196797547221Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
