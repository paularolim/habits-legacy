import clsx from "clsx";
import * as Popover from "@radix-ui/react-popover";

import { ProgressBar } from "../ProgressBar";

import { HabitProps } from "./types";
import { CheckBox } from "../CheckBox";
import dayjs from "dayjs";

const habits = ["2L de água", "Exercício", "Alimentação saudável", "Planejar próximo dia", "Dormir 8h"];

export function Habit({ completed = 0, amount = 0, date }: HabitProps) {
  const completedPercentage = amount > 0 ? Math.round((completed / amount) * 100) : 0;

  const dayAndMonth = dayjs(date).format("DD/MM");
  const weekDay = dayjs(date).format("dddd");

  return (
    <Popover.Root>
      <Popover.Trigger
        className={clsx("w-10 h-10  border-2 rounded-lg", {
          "bg-zinc-900 border-zinc-800 ": completedPercentage === 0,
          "bg-violet-900 border-violet-700": completedPercentage > 0 && completedPercentage < 20,
          "bg-violet-800 border-violet-600": completedPercentage >= 20 && completedPercentage < 40,
          "bg-violet-700 border-violet-500": completedPercentage >= 40 && completedPercentage < 60,
          "bg-violet-600 border-violet-400": completedPercentage >= 60 && completedPercentage < 80,
          "bg-violet-500 border-violet-300": completedPercentage >= 80,
        })}
      />

      <Popover.Portal>
        <Popover.Content className="min-w-[320px] p-6 rounded-2xl bg-zinc-900 flex flex-col">
          <span className="font-semibold text-zinc-400">{weekDay}</span>
          <span className="mt-1 font-extrabold leading-tight text-3xl">{dayAndMonth}</span>

          <ProgressBar progress={completedPercentage} />

          {habits.map((habit, index) => (
            <div key={habit} className="mt-2 flex flex-col gap-3">
              <CheckBox label={habit} />
            </div>
          ))}

          <Popover.Arrow className="fill-zinc-900" height={8} width={14} />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}
