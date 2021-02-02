import { FieldRule } from './generated/client/models';
import { FieldValue } from './types';

/**
 * Helper class for evaluating "visible if" rules
 */
class VisibileIfEvaluator {

  /**
   * Evaluates given visible if rule
   * 
   * @param fieldRule rule
   * @param getFieldValue method for retrieving form values
   * @returns whether rule evaluated as visible or hidden
   */
  public static isVisible = (fieldRule: FieldRule| undefined, getFieldValue: (fieldName: string) => FieldValue) => {
    if (!fieldRule) {
      return true;
    }

    let result: boolean = false;  

    const field = fieldRule.field;

    if (field && fieldRule.equals) {
      const equals = fieldRule.equals as FieldValue; 
      const fieldValue = getFieldValue(field);
      result = equals === fieldValue;
    }

    if (!result && field && fieldRule.notEquals) {
      const notEquals = fieldRule.notEquals as FieldValue; 
      const fieldValue = getFieldValue(field);
      result = notEquals !== fieldValue;
    }

    const ands = fieldRule.and || [];
    for (let i = 0; i < ands.length; i++) {
      if (!VisibileIfEvaluator.isVisible(ands[i], getFieldValue)) {
        return false;
      }
    }

    if (!result) {
      const ors = fieldRule.or || [];
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