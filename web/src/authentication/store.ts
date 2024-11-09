import { createSignal } from "solid-js";
import { User } from "./types";

export const [getUser, setUser] = createSignal<User | null>(null);
