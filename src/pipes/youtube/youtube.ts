import { Pipe, PipeTransform, Injectable} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'youtube',
})
export class YoutubePipe {
  
  constructor(private dom: DomSanitizer) { }
  
   transform(value, args) {
     return this.dom.bypassSecurityTrustResourceUrl(value);
   }
}
