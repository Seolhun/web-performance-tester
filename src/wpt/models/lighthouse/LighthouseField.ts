export interface LighthouseFieldDetailProps {
  type: string;
  headings: any[];
  items: any[];
  summary?: any;
  debugData?: any;
}

export interface LighthouseFieldProps {
  id: string;
  title: string;
  description: string;
  score: number;
  scoreDisplayMode: string;
  numericValue?: any;
  numericUnit?: any;
  displayValue?: any;
  explanation?: any;
  errorMessage?: any;
  warnings?: any;
  details?: LighthouseFieldDetailProps;
}

class LighthouseField implements LighthouseFieldProps {
  id: string;
  title: string;
  description: string;
  score: number;
  scoreDisplayMode: string;
  numericValue?: any;
  numericUnit?: any;
  displayValue?: any;
  explanation?: any;
  errorMessage?: any;
  warnings?: any;
  details?: LighthouseFieldDetailProps;

  constructor (props: LighthouseFieldProps) {
    this.id = props?.id
    this.title = props?.title
    this.description = props?.description
    this.score = props?.score
    this.scoreDisplayMode = props?.scoreDisplayMode
    this.numericValue = props?.numericValue
    this.numericUnit = props?.numericUnit
    this.displayValue = props?.displayValue
    this.explanation = props?.explanation
    this.errorMessage = props?.errorMessage
    this.warnings = props?.warnings
    this.details = props?.details
  }
}

export { LighthouseField }
export default LighthouseField
