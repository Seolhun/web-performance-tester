interface WPTLighthouseFieldProps {
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
  details?: WTPLighthouseFieldDetailProps;
}

interface WTPLighthouseFieldDetailProps {
  type: string;
  headings: any[];
  items: any[];
  summary?: any;
  debugData?: any;
}

class WPTLighthouseField implements WPTLighthouseFieldProps {
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
  details?: WTPLighthouseFieldDetailProps;

  constructor(props: WPTLighthouseFieldProps) {
    this.id = props?.id;
    this.title = props?.title;
    this.description = props?.description;
    this.score = props?.score;
    this.scoreDisplayMode = props?.scoreDisplayMode;
    this.numericValue = props?.numericValue;
    this.numericUnit = props?.numericUnit;
    this.displayValue = props?.displayValue;
    this.explanation = props?.explanation;
    this.errorMessage = props?.errorMessage;
    this.warnings = props?.warnings;
    this.details = props?.details;
  }
}

export { WPTLighthouseField, WPTLighthouseFieldProps };
export default WPTLighthouseField;
