import * as _ from 'lodash';
import { CustomDate } from './custom-date';

export class Article {

id: number;
title: string;
subtitle?: string;
persons?: Array<string>;
topics?: Array<string>;
categories?: Array<string>;
labels?: Array<string>;
published?: CustomDate;
created: CustomDate;
thumbnail?: string;
text: string;

constructor(created?: CustomDate) {
  if ( _.isEmpty(created) ) {
    this.created = new CustomDate();
  }else{
    this.created = created;
  }
}
}