import { For } from "solid-js";
import { getTransactions } from '../transactions/store';
import { Transaction } from "../transactions/type";
import "./DayCard.css"
import { useAppState } from '../providers/application-state.provider';

export function DayCard(props: { date: Date }) {
  const { selectedMonthNumber, selectedYear } = useAppState(state => state.calendar);
  const transactions = () => getTransactions().filter(t => t.date.toDateString() === props.date.toDateString());
  const isSelectedMonth = () => (props.date.getMonth() + 1) === selectedMonthNumber() && props.date.getFullYear() === selectedYear();

  return (
    <div class="day-card" classList={{
      "current-month-card": isSelectedMonth(),
      "other-month-card": !isSelectedMonth()
    }}>
      <label class="card-text" classList={{
        "current-month-text": isSelectedMonth(),
        "other-month-text": !isSelectedMonth()
      }}>{
          props.date.getDate().toString()
        }</label>
      <For each={transactions()}>{(t: Transaction) =>
        <div class="transaction-card">
          {t.logoUrl ? <img src={t.logoUrl} height='23px' width='23px' alt="transaction-logo" /> : <></>}
          <label color="white" >
            {`${t.description}:`}
          </label>
          <label color="white" >
            {`$${t.amount}`}
          </label>
        </div>}
      </For>
    </div>
  );
};
