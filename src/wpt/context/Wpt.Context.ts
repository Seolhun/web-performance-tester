import { pipe, map, toArray } from '@fxts/core';

import { WptAuditPathItem } from '../Wpt';
import { WptConfig } from './Wpt.Config';
import { WptLighthouseConfig } from './Wpt.LighthouseConfig';

export interface WptContextValue {
  config: Readonly<WptConfig>;
  auditPathsItems: Readonly<WptAuditPathItem[]>;
  lighthouseConfig: Readonly<WptLighthouseConfig>;
}

enum WptContextStatus {
  NONE = 'NONE',
  CREATED = 'CREATED',
}

function createWptContext() {
  let _status = WptContextStatus.NONE;

  let config: Readonly<WptConfig>;
  let auditPathsItems: Readonly<WptAuditPathItem[]>;
  let lighthouseConfig: Readonly<WptLighthouseConfig>;

  function _ready() {
    _status = WptContextStatus.CREATED;
  }

  function initialize() {
    config = Object.freeze(new WptConfig());
    auditPathsItems = Object.freeze(
      pipe(
        config.auditPaths,
        map((auditPath) => ({
          ...auditPath,
          url: `${config.origin}${auditPath.pathname}`,
        })),
        (values) => toArray(values),
      ),
    );
    lighthouseConfig = Object.freeze(new WptLighthouseConfig(config.options));

    _ready();
  }

  if (_status === WptContextStatus.NONE) {
    initialize();
  }

  return (): WptContextValue => {
    return {
      config,
      auditPathsItems,
      lighthouseConfig,
    };
  };
}

const WptContext = createWptContext();

export { WptContext };
export default WptContext;
