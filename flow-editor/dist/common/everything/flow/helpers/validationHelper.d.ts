import { IVariable } from "../../dataType/runtimemodels/IVariable";
import { Store } from "../../store/runtimemodels/IStoreModel";
type IVariableWithUnderscoreName = IVariable & {
    _name?: string;
};
type IVariables = Store | Record<string, IVariableWithUnderscoreName> | IVariableWithUnderscoreName;
export declare class ValidationHelper {
    static validateVariableName(name: string): string;
    static validateParameterValue(name: string): string;
    static migrateVariableModel(variables: IVariables): IVariables;
}
export {};
//# sourceMappingURL=validationHelper.d.ts.map