export const ASSET_BASE_URL = import.meta.env.VITE_ASSET_BASE_URL;
export const assetUrl = (p: string) => `${ASSET_BASE_URL}/${p.replace(/^\/+/, "")}`;