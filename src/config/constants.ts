export const API_HOST = import.meta.env.VITE_API_HOST?.toString() ?? '';
export const AUTH0_DOMAIN = import.meta.env.VITE_AUTH0_DOMAIN?.toString() ?? '';
export const AUTH0_CLIENT_ID =
  import.meta.env.VITE_AUTH0_CLIENT_ID?.toString() ?? '';
export const AUTH0_REDIRECT_URI = window.location.origin;
export const AUTH0_AUDIENCE =
  import.meta.env.VITE_AUTH0_AUDIENCE?.toString() ?? '';
