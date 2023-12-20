import { For } from 'solid-js';
import "./Header.css";

export function Header() {
  return (
    <div class="row header-row">
      <For each={daysOfTheWeek}>
        {(day: string) =>
          <label>
            {day}
          </label>
        }
      </For>
    </div>
  );
}

const daysOfTheWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
