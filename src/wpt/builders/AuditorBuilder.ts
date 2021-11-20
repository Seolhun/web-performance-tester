import {
  WptTestFieldType,
  Accessibility,
  BestPractices,
  Performances,
  PWA,
  SEO
} from '../constants'

export interface IAuditorBuilder {
  getTestListByType: (type: WptTestFieldType) => any[];
  getTestFieldList: (type: WptTestFieldType) => any[];
}

class AuditorBuilder implements IAuditorBuilder {
  getTestListByType = (type: WptTestFieldType) => {
    let result: any
    switch (type) {
      case WptTestFieldType.ACCESSIBILITY: {
        result = Accessibility
        break
      }
      case WptTestFieldType.BEST_PRACTICES: {
        result = BestPractices
        break
      }
      case WptTestFieldType.SEO: {
        result = SEO
        break
      }
      case WptTestFieldType.PWA: {
        result = PWA
        break
      }
      default: {
        result = Performances
        break
      }
    }
    return Object.values<any>(result)
  };

  getTestFieldList (type: WptTestFieldType = WptTestFieldType.PERFORMANCES) {
    return this.getTestListByType(type)
  }
}

export { AuditorBuilder }
export default AuditorBuilder
