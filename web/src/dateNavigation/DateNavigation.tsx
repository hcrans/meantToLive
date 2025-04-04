import { For } from 'solid-js';
import '../controls/radioButton.css'
import './DateNavigation.css'
import { selectedMonthNumber, selectedYear, setSelectedMonthNumber, setSelectedYear } from '../calendar/store';
import { Tab, TabGroup } from '../controls/radioButton';
import { Year, MonthNumber } from '../calendar/types';
import { YEARS } from '../calendar/constants';
import { monthsRecord } from '../calendar/utils';

export function DateNavigation() {
  return (
    <div class="column" >
      <button class="tab previousYearButton"
        disabled={selectedYear() === Math.min(...YEARS)}
        onClick={() => setSelectedYear(selectedYear() - 1 as Year)}>
        {selectedYear() - 1}
      </button>
      <TabGroup
        orientation="vertical"
        onChange={value => setSelectedMonthNumber(value as MonthNumber)}
        defaultSelectedValue={selectedMonthNumber()}>
        <For each={Object.entries(monthsRecord)}>
          {([_key, month]) =>
            <Tab display={month.monthAbbrev} value={month.monthNumber} />}
        </For>
      </TabGroup>
      <button class="tab nextYearButton"
        disabled={selectedYear() === Math.max(...YEARS)}
        onClick={() => setSelectedYear(selectedYear() + 1 as Year)}>
        {selectedYear() + 1}
      </button>
    </div >);
}
