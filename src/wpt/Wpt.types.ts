import { WptContextValue } from './context';
import { WptAuditPathItem } from './Wpt';

export interface WptErrorEvent {
  error: Error;
}

export interface WptEvent {
  context: WptContextValue;
}

export interface WptLighthouseEvent extends WptEvent {
  auditPath: WptAuditPathItem;
}

export interface WptReportEvent extends WptEvent {
  auditPath: WptAuditPathItem;
}

export interface WptEventHandlersEventMap {
  onReadyWpt: WptEvent;
  onStartedWpt: WptEvent;
  onFinishedWpt: WptEvent;
  onErrorWpt: WptEvent & WptErrorEvent;
  onStartedLighthouse: WptLighthouseEvent;
  onFinishedLighthouse: WptLighthouseEvent;
  onErrorLighthouse: WptLighthouseEvent & WptErrorEvent;
  onReportStart: WptReportEvent;
  onReportEnd: WptReportEvent;
}
