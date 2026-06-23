export const ATHENA_CHAT_FALLBACK_URL =
  'https://athenachat.bot/chatbot/agent/malkah-package-concierge9126';

export function buildAthenaChatUrl(packageName?: string) {
  const baseUrl =
    process.env.NEXT_PUBLIC_ATHENA_CHAT_URL?.trim() || ATHENA_CHAT_FALLBACK_URL;
  const url = new URL(baseUrl);

  url.searchParams.set('utm_source', 'malkah_web_services');
  url.searchParams.set('utm_medium', 'package_pricing');

  if (packageName?.trim()) {
    url.searchParams.set('package', packageName.trim());
  }

  return url.toString();
}
