import {
  TestType,
  TestTypes,
  Accessibility,
  BestPractices,
  Performances,
  PWA,
  SEO,
} from '@seolhun/web-performance-tester-types';

export interface AuditerBuilderProps {

}

class AuditerBuilder implements AuditerBuilderProps {
  getTestListByType = (type: TestType) => {
    let result: any;
    switch (type) {
      case TestTypes.ACCESSIBILITY:
        result = Accessibility;
        break;
      case TestTypes.BEST_PRACTICES:
        result = BestPractices;
        break;
      case TestTypes.SEO:
        result = SEO;
        break;
      case TestTypes.PWA:
        result = PWA;
        break;
      default:
        result = Performances;
        break;
    }
    return (): string[] => {
      return Object.values(result);
    };
  }

  getTestFields(type: TestType = TestTypes.PERFORMANCES): string[] {
    return this.getTestListByType(type)();
  }
}

export default AuditerBuilder;
