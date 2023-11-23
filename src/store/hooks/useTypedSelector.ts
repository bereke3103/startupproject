<<<<<<< HEAD:src/hooks/useTypedSelector.ts
import { AppDipatch, RootState } from "../store/store";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
=======
import {AppDipatch, RootState} from "../store";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
>>>>>>> 7f1665a67bca0abfe09494e9406b6ff0b4dec54c:src/store/hooks/useTypedSelector.ts

export const useAppDispatch: () => AppDipatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
