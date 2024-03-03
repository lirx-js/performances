import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-8454000451794287',
  standalone: true,
  templateUrl: './app-8454000451794287.component.html',
  styleUrl: './app-8454000451794287.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App8454000451794287Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
