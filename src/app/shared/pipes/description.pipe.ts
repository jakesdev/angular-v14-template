import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'description'})
export class DescriptionPipe implements PipeTransform {
  transform(description: string, title: string): string {
    if (!description || description === '') {
        if (title) {
          return `${title} is a technology skill that can help you successfully 
          perform in today’s world of work. Explore below to see examples of occupations and pathways 
          where you might use ${title}  as well as training programs that can introduce you to 
          the technology and / or help you improve your skills. `;
        } else {
          return 'There is no data to display';
        }
    }
    return description;
  }
}
