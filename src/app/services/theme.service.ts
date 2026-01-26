import { Theme } from "../models/theme";

class ThemeService {
  private readonly STORAGE_KEY = 'theme';

  load(): Theme {
    return loadTheme() ?? { type: 'light', color: 'violet' };
  }

  apply(theme: Theme) {
    applyThemeToDom(theme);
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(theme));
  }
}
