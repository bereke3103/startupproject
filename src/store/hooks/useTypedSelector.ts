import {AppDipatch, RootState} from "../store";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";


export const useAppDispatch:() => AppDipatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;