import { For } from 'solid-js';
import '../controls/radioButton.css'
import './DateNavigation.css'
import { MonthNumber, Months, Year, Years } from '../calendar/types';
import { selectedMonthNumber, selectedYear, setSelectedMonthNumber, setSelectedYear } from '../calendar/store';
import { Tab, TabGroup } from '../controls/radioButton';

export function DateNavigation() {
  return (
    <div class="column" >
      <button class="tab previousYearButton"
        disabled={selectedYear() === Math.min(...Years)}
        onClick={() => setSelectedYear(selectedYear() - 1 as Year)}>
        {selectedYear() - 1}
      </button>
      <TabGroup
        orientation="vertical"
        onChange={value => setSelectedMonthNumber(value as MonthNumber)}
        defaultSelectedValue={selectedMonthNumber()}>
        <For each={Object.entries(Months)}>
          {([_key, month]) =>
            <Tab display={month.MonthAbbrev} value={month.MonthNumber} />}
        </For>
      </TabGroup>
      <button class="tab nextYearButton"
        disabled={selectedYear() === Math.max(...Years)}
        onClick={() => setSelectedYear(selectedYear() + 1 as Year)}>
        {selectedYear() + 1}
      </button>
    </div >);
}
