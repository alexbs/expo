import nock from 'nock';

import { getExpoApiBaseUrl } from '../endpoint';
import { signClassicExpoGoManifestAsync, signExpoGoManifestAsync } from '../signManifest';
import { ensureLoggedInAsync } from '../user/actions';

const asMock = (fn: any): jest.Mock => fn;

jest.mock('../user/actions', () => ({
  ensureLoggedInAsync: jest.fn(),
}));

beforeEach(() => {
  asMock(ensureLoggedInAsync).mockClear();
});

describe(signClassicExpoGoManifestAsync, () => {
  it('signs a manifest', async () => {
    const scope = nock(getExpoApiBaseUrl())
      .post('/v2/manifest/sign')
      .reply(200, { data: { response: '...' } });
    expect(await signClassicExpoGoManifestAsync({} as any)).toBe('...');
    expect(ensureLoggedInAsync).toHaveBeenCalled();
    expect(scope.isDone()).toBe(true);
  });
});
describe(signExpoGoManifestAsync, () => {
  it('signs a manifest', async () => {
    const scope = nock(getExpoApiBaseUrl())
      .post('/v2/manifest/eas/sign')
      .reply(200, { data: { signature: '...' } });
    expect(await signExpoGoManifestAsync({} as any)).toBe('...');
    expect(ensureLoggedInAsync).toHaveBeenCalled();
    expect(scope.isDone()).toBe(true);
  });
});
