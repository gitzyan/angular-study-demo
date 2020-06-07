import { Pipe, PipeTransform } from '@angular/core';
import {FlyHerosPipe} from './fly-heros.pipe';

/**
 * Angular 会在每个组件的变更检测周期中执行非纯管道。
 * 非纯管道可能会被调用很多次，和每个按键或每次鼠标移动一样频繁。
 */
@Pipe({
  name: 'flyHerosImpure',
  pure: false
})
export class FlyHerosImpurePipe extends FlyHerosPipe {

}
