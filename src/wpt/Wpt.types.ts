import { WptContextValue } from './context';

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

export interface WptAuditPath {
  name: string;
  pathname: string;
}

export interface WptAuditPathItem extends WptAuditPath {
  url: string;
}
