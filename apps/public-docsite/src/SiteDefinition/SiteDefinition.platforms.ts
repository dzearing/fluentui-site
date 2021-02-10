import { IPlatform } from '@fluentui/react-docsite-components/lib/index2';
import { Platforms } from '../interfaces/Platforms';

export const platforms: { [x in Platforms]?: IPlatform } = {
  web: {
    name: 'Web',
    icon: 'WebLogo-platformPicker',
    color: '#28A8EA',
  },
};
