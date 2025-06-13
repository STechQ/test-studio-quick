import Vue from "vue";
declare const _default: import("vue/types/vue").ExtendedVue<Vue, {
    internalValue: any;
    menu2: boolean;
    uniqueID: string;
    startTime: any;
    endTime: any;
    showRange: boolean;
    displayValue: string;
    range: boolean;
}, {
    resurrect(): void;
    openTimePickers(): void;
    updateStartTime(newValue: any): void;
    updateEndTime(newValue: any): void;
    clickMinuteEnd(): void;
    clickMinuteStart(): void;
    onStartTimeChange(): void;
    onEndTimeChange(): void;
    updateDisplayValue(): void;
    timeChange(): void;
    reset(): void;
    resetValidation(): void;
    validationRefs(): (Element | Vue | Vue[] | Element[])[];
    clickHour(hour: any): void;
    autoFormatTime(time: string): string;
    updateTimeValues(value: string): void;
    onKeyDown(event: KeyboardEvent): void;
    onPaste(event: ClipboardEvent): void;
}, unknown, {
    allowedHours: unknown[];
    allowedMinutes: unknown[];
    dense: boolean;
    rounded: boolean;
    range: boolean;
    disabled: boolean;
    label: string;
    min: string;
    max: string;
    outlined: boolean;
    readonly: boolean;
    rules: unknown[];
    value: string;
    willAttach: boolean;
    textFieldClass: string;
    _renderingProps: any;
}>;
export default _default;
//# sourceMappingURL=VInlineTimePicker.vue.d.ts.map