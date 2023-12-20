import { createSignal } from "solid-js";
import { user } from "./types";

export const [getUser, setUser] = createSignal<user>(null);
