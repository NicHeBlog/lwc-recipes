//数据绑定，双向绑定数据，
//greeting变量没有声明，此时主动成为一个全局的变量

import { LightningElement } from 'lwc';

export default class Hello extends LightningElement {
    greeting = 'World';
}