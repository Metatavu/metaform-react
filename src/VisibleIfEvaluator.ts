import { MetaformVisibleIf } from './generated/client/models';
import { FieldValue } from './types';

/**
 * Helper class for evaluating "visible if" rules
 */
class VisibileIfEvaluator {

  /**
   * Evaluates given visible if rule
   * 
   * @param visibleIf rule
   * @param getFieldValue method for retrieving form values
   * @returns whether rule evaluated as visible or hidden
   */
  public static isVisible = (visibleIf: MetaformVisibleIf | undefined, getFieldValue: (fieldName: string) => FieldValue) => {
    if (!visibleIf) {
      return true;
    }

    let result: boolean = false;  

    const field = visibleIf.field;

    if (field && visibleIf.equals) {
      const equals = visibleIf.equals as FieldValue; 
      const fieldValue = getFieldValue(field);
      result = equals === fieldValue;
    }

    if (!result && field && visibleIf.notEquals) {
      const notEquals = visibleIf.notEquals as FieldValue; 
      const fieldValue = getFieldValue(field);
      result = notEquals !== fieldValue;
    }

    const ands = visibleIf.and || [];
    for (let i = 0; i < ands.length; i++) {
      if (!VisibileIfEvaluator.isVisible(ands[i], getFieldValue)) {
        return false;
      }
    }

    if (!result) {
      const ors = visibleIf.or || [];
      for (let i = 0; i < ors.length; i++) {
        if (VisibileIfEvaluator.isVisible(ors[i], getFieldValue)) {
          return true;
        }
      }
    }

    return result;
  }

}

export default VisibileIfEvaluator;