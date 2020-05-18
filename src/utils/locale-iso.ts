export default function localeIso(locales: any[], short: string): string {
  return locales.find(locale => locale.code === short).iso.toLowerCase()
}
