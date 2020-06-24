import { LighthouseFieldProps } from '@seolhun/web-performance-tester-types';

export class LighthouseFieldResponse implements LighthouseFieldProps {
  id: string;
  title: string;
  description: string;
  score: number;
  scoreDisplayMode: string;
  numericValue: number | string;

  constructor(props: LighthouseFieldProps) {
    this.id = props.id;
    this.title = props.title;
    this.description = props.description;
    this.scoreDisplayMode = props.scoreDisplayMode;
    this.score = props.score || -1;
    this.numericValue = props.numericValue || '(not-set)';
  }
}

export default LighthouseFieldResponse;
