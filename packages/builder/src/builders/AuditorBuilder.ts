import {
  WPTTestType,
  WPTTestTypes,
  Accessibility,
  BestPractices,
  Performances,
  PWA,
  SEO,
} from '@seolhun/web-performance-tester-models';

export interface AuditorBuilderProps {}

class AuditorBuilder implements AuditorBuilderProps {
  private getTestListByType = (type: WPTTestType) => {
    let result: any;
    switch (type) {
      case WPTTestTypes.ACCESSIBILITY: {
        result = Accessibility;
        break;
      }
      case WPTTestTypes.BEST_PRACTICES: {
        result = BestPractices;
        break;
      }
      case WPTTestTypes.SEO: {
        result = SEO;
        break;
      }
      case WPTTestTypes.PWA: {
        result = PWA;
        break;
      }
      default: {
        result = Performances;
        break;
      }
    }

    return (): string[] => {
      return Object.values(result);
    };
  };

  getTestFields(type: WPTTestType = WPTTestTypes.PERFORMANCES) {
    return this.getTestListByType(type)();
  }
}

export { AuditorBuilder };
export default AuditorBuilder;
