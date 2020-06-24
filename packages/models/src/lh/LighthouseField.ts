interface LighthouseFieldProps {
  id: string;
  title: string;
  description: string;
  score: number;
  scoreDisplayMode: string;
  numericValue: number | string;
}

class LighthouseField implements LighthouseFieldProps {
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

export { LighthouseField, LighthouseFieldProps };
export default LighthouseField;
