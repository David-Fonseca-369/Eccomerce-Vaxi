import { Icon } from "../icon";

export type Value = number | string | boolean

export interface ControlItem{
    value:Value //value es igual al tipo que se define en la parte de arriba
    label: string;
    icon? : Icon
}