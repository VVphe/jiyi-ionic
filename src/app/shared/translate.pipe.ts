import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'translate'
})
export class TranslatePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    switch(value) {
      case 'campus':
        return '校园';
      case 'technology':
        return '科技';
      case 'life':
        return '生活';
      case 'music':
        return '音乐';
      case 'sport':
        return '运动';
      default:
        return '其他';
    }
  }

}
