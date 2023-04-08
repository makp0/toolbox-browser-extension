import riderIcon from '@jetbrains/logos/rider/rider.svg';

export const DEFAULT_LANGUAGE = 'c#';

export const SUPPORTED_LANGUAGES = {
  [DEFAULT_LANGUAGE]: ['rider'],
  'c#': ['rider']
};

export const SUPPORTED_TOOLS = {
  rider: {
    name: 'Rider',
    tag: 'rd',
    icon: riderIcon
  }
};

export const USAGE_THRESHOLD = 0.05;
export const HUNDRED_PERCENT = 100;
export const MAX_DECIMALS = 2;
export const MIN_VALID_HTTP_STATUS = 200;
export const MAX_VALID_HTTP_STATUS = 299;
export const DEFAULT_LANGUAGE_SET = {[DEFAULT_LANGUAGE]: HUNDRED_PERCENT};

export const CLONE_PROTOCOLS = {
  HTTPS: 'HTTPS',
  SSH: 'SSH'
};
