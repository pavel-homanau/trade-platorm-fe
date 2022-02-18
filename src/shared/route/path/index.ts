import {FunctionComponent} from "react";

export {default as Path} from './path';

export type RouteType = {
    path: string;
    component: FunctionComponent;
};