/**
 * 组件源文件
 */

import * as React from 'react';
import { ITestProps } from './interface';

export default function Test(props: ITestProps) {
  return <div className="test">{props.name}</div>;
}

// ci
