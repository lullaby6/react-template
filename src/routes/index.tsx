import { useState } from 'react'
import { signal } from "@preact/signals-react";
import { useSignals } from "@preact/signals-react/runtime";

import { Button } from "@/components/ui/button"

const countSignal = signal(0);

export function Component() {
  const [count, setCount] = useState(0)
	useSignals();

  return (
    <>
      <p>{count}</p>
      <Button onClick={() => setCount(count + 1)}>Button</Button>

			<p>{countSignal}</p>
      <Button variant="outline" onClick={() => countSignal.value++}>Button</Button>
    </>
  )
}