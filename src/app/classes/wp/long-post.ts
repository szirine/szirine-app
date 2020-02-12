import { Title } from './title';
import { Content } from './content';
import { Excerpt } from './excerpt';

export interface LongPost {
id: number;
date: string;
date_gmt: string;
modified: string;
modified_gmt: string;
slug: string;
status: string;
type: string;
link: string;
title: Title;
content: Content;
excerpt: Excerpt;
author: number;
featured_media: number;
sticky: boolean;
categories: Array<number>;
tags: Array<number>;
jetpack_featured_media_url: string;
}