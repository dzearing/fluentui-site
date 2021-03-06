// @ts-check

// Config file for API doc JSON (*.page.json) generation

const path = require('path');
const apiDocs = require('../lib/index');

/** @type {apiDocs.IPageJsonOptions} */
module.exports = {
  apiJsonPaths: [
    // NOTE: when adding new package to this list, also add package dep in package.json.
    path.resolve(__dirname, '../../../ladingTypes/@fluentui/date-time-utilities/dist/date-time-utilities.api.json'),
    path.resolve(__dirname, '../../../ladingTypes/@fluentui/merge-styles/dist/merge-styles.api.json'),
    path.resolve(__dirname, '../../../ladingTypes/@fluentui/react/dist/react.api.json'),
    path.resolve(__dirname, '../../../ladingTypes/@fluentui/react/dist/react-compat.api.json'),
    path.resolve(__dirname, '../../../ladingTypes/@fluentui/react-button/dist/react-button.api.json'),
    path.resolve(__dirname, '../../../ladingTypes/@fluentui/react-cards/dist/react-cards.api.json'),
    path.resolve(__dirname, '../../../ladingTypes/@fluentui/react-checkbox/dist/react-checkbox.api.json'),
    path.resolve(__dirname, '../../../ladingTypes/@fluentui/react-date-time/dist/react-date-time.api.json'),
    path.resolve(__dirname, '../../../ladingTypes/@fluentui/react-focus/dist/react-focus.api.json'),
    path.resolve(__dirname, '../../../ladingTypes/@fluentui/react-internal/dist/react-internal.api.json'),
    path.resolve(__dirname, '../../../ladingTypes/@fluentui/react-internal/dist/react-internal-compat.api.json'),
    path.resolve(__dirname, '../../../ladingTypes/@fluentui/react-link/dist/react-link.api.json'),
    path.resolve(__dirname, '../../../ladingTypes/@fluentui/react-slider/dist/react-slider.api.json'),
    path.resolve(__dirname, '../../../ladingTypes/@fluentui/react-tabs/dist/react-tabs.api.json'),
    path.resolve(__dirname, '../../../ladingTypes/@fluentui/react-theme-provider/dist/react-theme-provider.api.json'),
    path.resolve(__dirname, '../../../ladingTypes/@fluentui/react-toggle/dist/react-toggle.api.json'),
    path.resolve(__dirname, '../../../ladingTypes/@fluentui/style-utilities/dist/style-utilities.api.json'),
    path.resolve(__dirname, '../../../ladingTypes/@fluentui/theme/dist/theme.api.json'),
    path.resolve(__dirname, '../../../ladingTypes/@fluentui/utilities/dist/utilities.api.json'),
    // NOTE: when adding new package to this list, also add package dep in package.json.
  ],
  outputRoot: path.resolve(__dirname, '../lib/pages'),
  fallbackGroup: 'references',
  pageGroups: {
    react: [
      'ActivityItem',
      'Announced',
      'Breadcrumb',
      'Button',
      'Calendar',
      'Callout',
      'Checkbox',
      'ChoiceGroup',
      'Coachmark',
      'ColorPicker',
      'ComboBox',
      'CommandBar',
      'CompatButton',
      'ContextualMenu',
      'DatePicker',
      'DetailsList',
      'Dialog',
      'Divider',
      'DocumentCard',
      'Dropdown',
      'ExtendedPeoplePicker',
      'ExtendedPicker',
      'Facepile',
      'FloatingPeoplePicker',
      'FloatingPicker',
      'FocusTrapZone',
      'FocusZone',
      'GroupedList',
      'HoverCard',
      'Icon',
      'Image',
      'Keytips',
      'Label',
      'Layer',
      'Link',
      'List',
      'MarqueeSelection',
      'MessageBar',
      'Modal',
      'Nav',
      'OverflowSet',
      'Overlay',
      'Panel',
      'PeoplePicker',
      'Persona',
      'Pickers',
      'Pivot',
      'Popup',
      'ProgressIndicator',
      'Rating',
      'ResizeGroup',
      'SelectedPeopleList',
      'Separator',
      'ScrollablePane',
      'SearchBox',
      'SelectableOption',
      'SelectedItemsList',
      'Shimmer',
      'Slider',
      'SpinButton',
      'Spinner',
      'Stack',
      'SwatchColorPicker',
      'TeachingBubble',
      'Text',
      'TextField',
      'Toggle',
      'Tooltip',
    ],
    'react-cards': ['Card'],
  },
};
