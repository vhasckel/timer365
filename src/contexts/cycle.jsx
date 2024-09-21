import { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";

export const CycleContext = createContext({
  cycles: [],
  activeCycle: undefined,
  activeCycleId: null,
  createNewCycle: () => {},
});

export function CycleProvider({ children }) {
  const [cycles, setCycles] = useState([]);
  const [activeCycleId, setActiveCycleId] = useState(null);

  /**
   * @param {Object} data Dados para criação de um novo ciclo
   * @param {String} data.task
   * @param {number} data.minutesAmount
   */
  function createNewCycle({ task, minutesAmount }) {
    // id : string
    // task: string
    // minutesAmount: number
    // startDate: Date
    // interruptedDate?: Date | undefined
    // finishedDate?: Date | undefined
    const id = String(new Date().getTime());

    const newCycle = {
      id,
      task,
      minutesAmount,
      startDate: new Date(),
    };

    // setCycles([...cycles, newCycle])
    setCycles((prevCycles) => {
      let newCycleState = [...prevCycles, newCycle];
      localStorage.setItem("cycles", JSON.stringify(newCycleState));
      return newCycleState;
    });
    setActiveCycleId(id);
  }

  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId);
  return (
    <CycleContext.Provider
      value={{ cycles, activeCycle, activeCycleId, createNewCycle }}
    >
      {children}
    </CycleContext.Provider>
  );
}

CycleProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export function useCycle() {
  const context = useContext(CycleContext);
  return context;
}
