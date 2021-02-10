import * as React from 'react';
import { INavPage, LoadingComponent } from '@fluentui/react-docsite-components/lib/index2';
import { controlsPagesWeb } from './index';

export const ControlsPages: INavPage = {
  title: 'Controls',
  url: '#/controls',
  className: 'controlsPage',
  isUhfLink: true,
  hasPlatformPicker: true,
  isSearchable: true,
  component: () => <LoadingComponent title="Controls" />,
  getComponent: cb =>
    require.ensure([], require => cb(require<any>('../../../pages/Overviews/ControlsPage/ControlsPage').ControlsPage)),
  platforms: {
    web: controlsPagesWeb,
  },
};
