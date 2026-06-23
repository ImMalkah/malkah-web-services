import { strict as assert } from 'node:assert';
import { test } from 'node:test';
import { ATHENA_CHAT_FALLBACK_URL, buildAthenaChatUrl } from './athenaChat';

test('builds Athena chat URL with source and selected package context', () => {
  const url = new URL(buildAthenaChatUrl('Deluxe'));

  assert.equal(url.origin + url.pathname, ATHENA_CHAT_FALLBACK_URL);
  assert.equal(url.searchParams.get('utm_source'), 'malkah_web_services');
  assert.equal(url.searchParams.get('utm_medium'), 'package_pricing');
  assert.equal(url.searchParams.get('package'), 'Deluxe');
});

test('omits empty package context from Athena chat URL', () => {
  const url = new URL(buildAthenaChatUrl(''));

  assert.equal(url.searchParams.has('package'), false);
});
