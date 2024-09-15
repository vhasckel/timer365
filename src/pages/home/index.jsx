import { useForm, FormProvider } from "react-hook-form";
import { useCycle } from "../../contexts/cycle";

import Button from "../../components/button";
import NewCycle from "../../components/new-cycle";
import Timer from "../../components/timer";

import "./home.css";

export function HomePage() {
  const methods = useForm();
  const { createNewCycle } = useCycle();
  const { handleSubmit } = methods;

  /**
   * @param {Object} data Dados para criação de um novo ciclo
   * @param {String} data.task
   * @param {number} data.minutesAmount
   */

  function onSubmit(data) {
    createNewCycle(data);
  }

  return (
    <form className="container--home" onSubmit={handleSubmit(onSubmit)}>
      <FormProvider {...methods}>
        <NewCycle />
      </FormProvider>

      <Timer />

      <Button>Começar</Button>
    </form>
  );
}
