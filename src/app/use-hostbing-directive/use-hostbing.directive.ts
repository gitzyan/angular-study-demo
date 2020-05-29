import {Directive, HostBinding, Input} from '@angular/core';

@Directive({
  selector: '[appUseHostBing]'
})
export class UseHostBingDirective {

  constructor() { }
  @Input('appUseHostBing') setInnerText: string;

  /**
   * 一个装饰器，
   * 用于把一个 DOM 属性标记为绑定到宿主的属性，并提供配置元数据。
   * Angular 在变更检测期间会自动检查宿主属性绑定，如果这个绑定变化了，它就会更新该指令所在的宿主元素。
   */
  @HostBinding() get innerText() {
    return this.setInnerText;
  }
}
