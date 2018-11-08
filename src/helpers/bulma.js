export function is(name, test) {
  return test ? `is-${name}` : '';
}

export function isActive(test) {
  return is('active', test);
}
