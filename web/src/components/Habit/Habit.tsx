import * as Popover from "@radix-ui/react-popover";
import { ProgressBar } from "../ProgressBar";

import { HabitProps } from "./types";

export function Habit({ completed }: HabitProps) {
  return (
    <Popover.Root>
      <Popover.Trigger className="w-10 h-10 bg-zinc-900 border-2 border-zinc-800 rounded-lg" />

      <Popover.Portal>
        <Popover.Content className="min-w-[320px] p-6 rounded-2xl bg-zinc-900 flex flex-col">
          <span className="font-semibold text-zinc-400">terça-feira</span>
          <span className="mt-1 font-extrabold leading-tight text-3xl">17/01</span>

          <ProgressBar progress={75} />

          <Popover.Arrow className="fill-zinc-900" height={8} width={14} />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}
