import { FC } from "react";
import { INestedStore } from "../../../everything/store/designtimemodels/IStoreModel";
import { IStoreInParameterMapping, IStoreMapping, IStoreOutParameterMapping } from "../../../everything/store/runtimemodels/IStoreMapping";
interface IMappingProps {
    mapping: IStoreMapping;
    mappingSchema: IStoreMapping;
    outerStore: INestedStore;
    constantsOptions: Array<{
        name: string;
        value: string;
    }>;
    readOnly?: boolean;
    onChangeInParamMapping: (inParamMapping: IStoreInParameterMapping[]) => void;
    onChangeOutParamMapping: (outParamMapping: IStoreOutParameterMapping[]) => void;
}
export declare const Mapping: FC<IMappingProps>;
export {};
//# sourceMappingURL=Mapping.d.ts.map