import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'lookupByKey'})
export class LookupByKeyPipe implements PipeTransform {
  transform(value: any, list: any[], fieldValue: string, fieldDisplay: string): string {
    if (!list || list.length === 0) {
      return '';
    }
    const item = list.find(_ => _[fieldValue] === value);
    return (!item || !item[fieldDisplay]) ? '' : item[fieldDisplay];
  }
}
