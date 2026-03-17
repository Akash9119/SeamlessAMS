declare global {
  interface Window {
    SEAMLESS_THEME_URI?: string;
  }
}

export function getThemeAssetUrl(assetPath: string): string {
  const cleanPath = assetPath.replace(/^\/+/, "");
  const themeUri = window.SEAMLESS_THEME_URI?.replace(/\/+$/, "");

  if (themeUri) {
    return `${themeUri}/${cleanPath}`;
  }

  const baseUrl = import.meta.env.BASE_URL || "/";
  return `${baseUrl.replace(/\/+$/, "")}/${cleanPath}`.replace(/([^:]\/)\/+/g, "$1");
}
