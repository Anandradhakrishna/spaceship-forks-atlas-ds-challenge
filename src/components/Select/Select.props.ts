export default interface SelectProps {
    /** Text given to the label above the select dropdown. Defaults to Select an option */
    label?: string;
    /** The only required prop that has list of options to choose from. */
    options: Option[];
    /** Placeholder to show in select when no value is selected */
    placeholder?: string;
    theme?: Theme;
    onChange?: (selectedValue: Option) => void;
}

export interface Option {
    group?: string;
    value: string;
    addtData?: string;
}

export enum Theme {
    DARK = 'dark',
    LIGHT = 'light'
}