import { createSignal, createContext, JSX, useContext } from "solid-js";
import './radioButton.css'

type allowableValueTypes = string | number;
type RadioButtonGroupContextType = {
  selectedValue: () => allowableValueTypes;
  setSelectedValue: (value: allowableValueTypes) => void;
};

const TabGroupContext = createContext<RadioButtonGroupContextType>();

type TabProps = {
  value: allowableValueTypes;
  display: JSX.Element;
};

type TabGroupProps = {
  children: JSX.Element;
  defaultSelectedValue: allowableValueTypes;
  onChange: (value: allowableValueTypes) => void;
  orientation?: "horizontal" | "vertical"
};


export function TabGroup(props: TabGroupProps) {
  const [selectedValue, setSelectedValue] = createSignal(props.defaultSelectedValue);

  const combinedSetter = (value: allowableValueTypes) => {
    setSelectedValue(value);
    props.onChange(value);
  }
  const defaultContext = { selectedValue, setSelectedValue: combinedSetter };

  return (
    <TabGroupContext.Provider value={defaultContext}>
      <div class="tabs" style={{ display: 'flex', 'flex-direction': props.orientation === 'vertical' ? 'column' : 'row' }}>
        {props.children}
      </div>
      <div class="marker">
        <div id="top"></div>
        <div id="bottom"></div>
      </div>
    </TabGroupContext.Provider>
  );
}

export function Tab({ value, display }: TabProps) {
  const context = useContext(TabGroupContext);
  if (context === undefined) return;

  const { selectedValue, setSelectedValue } = context;

  const isSelected = () => selectedValue() == value;
  return (
    <button classList={{"tab": true, "active":isSelected()}} onclick={() => setSelectedValue(value)}>
      {display}
    </button>
  );
}
// aria-pressed={isSelected()} disabled={isSelected()}
