import { capitalize } from '../utils/stringUtils';

export const themeColors = [
  'red',
  'green',
  'blue',
  'yellow',
  'cyan',
  'magenta',
  'orange',
  'chartreuse',
  'spring-green',
  'azure',
  'violet',
  'rose',
];
export type ThemeColor = (typeof themeColors)[number];

export const themeTypes = ['light', 'dark'];
export type ThemeType = (typeof themeTypes)[number];

export class Theme {
  readonly name: string;

  constructor(
    public readonly type: ThemeType,
    public readonly color: ThemeColor,
  ) {
    this.name = `${capitalize(type)} ${capitalize(color)}`;
  }
}
