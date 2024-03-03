import { bootstrap } from '@lirx/dom';
import { FileToDataUrlComponent } from './file-to-data-url/file-to-data-url.component';

function main(): void {
  bootstrap(FileToDataUrlComponent);
}

window.onload = main;

