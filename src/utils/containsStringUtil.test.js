import containsString from './containsStringUtil';

describe('containsString', () => {
  it('should return true when checking "oo" against "foo"', () => {
    const string = 'foo';
    const substring = 'oo';
    expect(containsString(string, substring)).toEqual(true);
  })
  it('should return true when checking "dancing" against "dancing-woman"', () => {
    const string = 'dancing-woman';
    const substring = 'dancing';
    expect(containsString(string, substring)).toEqual(true);
  })
  it('should return true when checking "wom" against "dancing woman"', () => {
    const string = 'dancing woman';
    const substring = 'wom';
    expect(containsString(string, substring)).toEqual(true);
  })
  it('should return true when checking "ing wo" against "dancing-woman"', () => {
    const string = 'dancing-woman';
    const substring = 'ing wo';
    expect(containsString(string, substring)).toEqual(true);
  })
  it('should return true when checking "ing-wo" against "dancing-woman"', () => {
    const string = 'dancing-woman';
    const substring = 'ing-wo';
    expect(containsString(string, substring)).toEqual(true);
  })
  it('should return false when checking "ee" against "foo"', () => {
    const string = 'foo';
    const substring = 'ee';
    expect(containsString(string, substring)).toEqual(false);
  })
  it('should return true when checking "" against ""', () => {
    const string = '';
    const substring = '';
    expect(containsString(string, substring)).toEqual(true);
  })
  it('should return false when checking "y" against ""', () => {
    const string = '';
    const substring = 'y';
    expect(containsString(string, substring)).toEqual(false);
  })
});
