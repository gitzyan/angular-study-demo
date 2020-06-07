import { Pipe, PipeTransform } from '@angular/core';

/**
 * Angular 只有在它检测到输入值发生了纯变更时才会执行纯管道。
 * 纯变更是指对原始类型值(String、Number、Boolean、Symbol)的更改，
 * 或者对对象引用(Date、Array、Function、Object)的更改。
 * Angular 会忽略(复合)对象内部的更改。
 * 这可能看起来是一种限制，但它保证了速度。 对象引用的检查是非常快的(比递归的深检查要快得多)
 */
@Pipe({
  name: 'flyHeros'
})
export class FlyHerosPipe implements PipeTransform {

  transform(allHeroes: any[]) {
    return allHeroes.filter(hero => hero.canFly);
  }

}
