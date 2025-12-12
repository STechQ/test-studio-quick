import { Store } from "../everything/store/designtimemodels/IStoreModel";
import { IStudioUIModelBase } from "../everything/studio/ui/IStudioUIModelBase";
type findObjectCBType = (objectId: string) => Promise<any>;
export declare const generateFlowIntellisense: (models: {
    dataTypeModels?: Array<IStudioUIModelBase>;
    dataSetModels?: Array<IStudioUIModelBase>;
}, findObjectCB: findObjectCBType, options: {
    store?: Store;
}) => Promise<string>;
export {};
//# sourceMappingURL=intelliSenseHelper.d.ts.map