import { ContextManager } from "../../../../shrimp/context";
import { IComponent } from "../../../../shrimp/interfaces/ComponentInterfaces/IComponent";
import { IComponentCollection } from "../../../../shrimp/interfaces/ComponentInterfaces/IComponentCollection";
import { IQJSon } from "../../../../shrimp/interfaces/ComponentInterfaces/IQJson";
import { IDictionary } from "../../../../shrimp/interfaces/IDictionary";
import { IDomElement } from "../../../../shrimp/interfaces/RenderingInterfaces/IDomElement";
import { IDoryJr } from "../../../../shrimp/interfaces/RenderingInterfaces/IDoryJr";
import { IHistoryAdditionalItem, IHistoryItem, IForeachHistoryItemCbParams } from "../../../../shrimp/interfaces/RenderingInterfaces/IHistoryItem";
import { ScriptLang } from "../../../../shrimp/interfaces/Scripting/scriptLang";
import { RenderingContext } from "../../Context/RenderingContext";
import { DoryJr } from "../../DoryJr";
import { HistoryManager } from "../../Managers/HistoryManager";
import { IRenderingManager } from "../../../../shrimp/interfaces/RenderingInterfaces/IRenderingManager";
export declare class HistoryItem implements IHistoryItem {
    private compSearchCache;
    private qjson;
    context: ContextManager;
    controlDict: IDictionary<IComponentCollection>;
    controlList: Array<IComponentCollection>;
    private compInstDict?;
    private compIndexedCollection?;
    pageId: string;
    pageName?: string;
    private readonly _additionals;
    private indexManager?;
    private pageScripting?;
    private renderingContext?;
    compareCompValue: boolean;
    qjsonVersion: number | undefined;
    private _masterData?;
    get masterData(): {
        path: string;
    } | undefined;
    constructor({ qjson, context, storeItems, pageId, pageName }: {
        qjson: IQJSon;
        context: ContextManager;
        storeItems?: IDictionary<any>;
        pageId: string;
        pageName?: string;
    });
    getAdditional<T extends IHistoryAdditionalItem>(key: string): T | undefined;
    getOrCreateAdditional<T extends IHistoryAdditionalItem>(key: string, creatorCb: () => T): T;
    Render({ compParentInst, noHistory }: {
        compParentInst?: any;
        noHistory?: boolean;
    }): Promise<void>;
    getOwnerHistoryManager(): HistoryManager | undefined;
    FindCreateComponentRelative(sourceComp: IComponent, targetCompID: string): IComponent | undefined;
    /**
     * Get component by tyoe of the component name
     * @param typeName Component type name( {T: ..., P: ..., ...})
     * @returns ComponentCollection | null
     */
    GetControlWithTypeName(typeName: string): IComponentCollection | null;
    GetCompCollectionByCompInst(component: IComponent): IComponentCollection | null;
    foreachHistoryItem(cb: (cbParam: IForeachHistoryItemCbParams) => void): void;
    findHistoryItem(cb: (cbParam: IForeachHistoryItemCbParams) => boolean, nestLevel?: number): IHistoryItem | undefined;
    getComponentCollectionByIdProperty({ id, deep }: {
        id: string;
        deep: boolean;
    }): IComponentCollection | undefined;
    getComponentCollectionByDom({ element, deep }: {
        element: IDomElement;
        deep: boolean;
    }): IComponentCollection | undefined;
    private iterateSubHistoryItems;
    GetComponentCollectionByUID(compUID: string): IComponentCollection | undefined;
    GetComponentCollection(): Record<string, IComponentCollection> | null;
    GetComponentList(): Array<IComponentCollection>;
    getCompCollectionById(id: string | IComponent): IComponentCollection | undefined;
    destroyComponentCollectionById(Id: string): boolean;
    update(): void;
    hibernate(passHibernate?: boolean): void;
    resurrect(): void;
    destroyCollection(compCollection?: IComponentCollection): void;
    destroy(): void;
    /**
     * Do not use. -> destroyCollection or destroy
     */
    private destroyPriv;
    remount(): void;
    registerDoryJr(doryJr: IDoryJr): void;
    getQLang(): ScriptLang | undefined;
    GetRenderingContext(): RenderingContext;
    GetDoryJrs(): DoryJr[] | null;
    GetRenderingManager(): IRenderingManager | undefined;
    /**
     * Do not use directly, use Dory.SetLRType.
     */
    UpdateLRType(): void;
    private arrangeLRType;
    private obliviateComponent;
    GetCompInstDict(): Record<string, IComponent>;
    ReCalculateCompInstDict(): void;
    private extractCompInstDictFrom;
    getComponentJsonByCompId(compId: string, reverseLook?: boolean): {
        compLoc: any;
        path: any;
    } | null | undefined;
    getComponentSubCollections(iterateSubHI?: boolean): Array<IComponentCollection>;
    /**
     * Find comparison component at the current pjson
     * @param pjson Current pjson
     * @returns boolean
     */
    private findComparisonCompAndReplace;
    themeConfiguration(context: ContextManager, themeName: string, isLight?: boolean): void;
    setMasterData(masterData: {
        path: string;
    }): void;
}
//# sourceMappingURL=HistoryItem.d.ts.map