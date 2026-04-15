# OTD — Orchestrating Things Done

**A personal task management framework for managing parallel work and delegation.**

**Full documentation → [otd.mochaive.com](https://otd.mochaive.com)**

---

## The problem

You open your task manager. There are thirty items. Some are urgent, some have been sitting there for weeks. You spend ten minutes figuring out where to start — and by the time you decide, you've already burned energy that should have gone into actual work.

Or: you delegated something to a colleague last week. You think you remember. But you're not sure if they replied, or if it's waiting on you, or if it just fell through.

Or: you get to the end of the day. You were busy the whole time. But you're not sure what actually moved forward, and the list looks about the same length as this morning.

Most task systems don't solve these. They give you a better list. The list still grows. There's still no clear signal for when you're done.

---

## What OTD does differently

**Each stream of work gets its own lane.**
Multiple projects advance simultaneously. Inside each lane, steps happen in sequence — you always know what's next. You don't choose between thirty items. You choose between five or six, one per active stream.

**Delegation is first-class.**
Do, Delegate, Await, Review — four modes with equal visibility. When you hand something off to a person or AI, it moves to Await. When results come back, they surface as Review. The loop closes. Nothing disappears.

**Today is a closed set, not an open list.**
Every morning you build Today from what your active Flows surface. Every item in Today is completable today. When Today is empty, you're done — not because the clock ran out, but because the set you built this morning is finished. This is different from a task list, which never empties.

---

## The Framework

| Concept | What it is |
|---------|-----------|
| **Area** | An ongoing domain of your life. Never ends. |
| **Project** | A goal large enough to contain multiple Flows. Has a finish line. |
| **Flow** | A specific stream of work. Sequential inside, parallel across. |
| **Action** | The smallest unit of work. Completable in a single day. |
| **Mode** | Do / Delegate / Await / Review — who executes and what state. |
| **Today** | The Actions you will touch today. When empty, your day is done. |

Two principles underlie everything: *Empty your head.* And *Design your own day.*

---

## A Day with OTD

```
Area: Side Projects
  └─ Project: App launch
       ├─ Flow: Build MVP         →  [Do]       Write technical spec
       └─ Flow: Launch marketing  →  [Delegate] Ask AI to draft landing page copy

Area: Career
  └─ Flow: Job search            →  [Review]   Check salary research from yesterday

Area: Health
  └─ Action                      →  [Do]       Book annual checkup
```

```
07:00  Daily Review — build Today
08:00  Review  → Salary research approved. Next action in Flow unlocks.
09:00  Delegate → Landing page prompt sent. Moves to Await.
10:00  Do      → Technical spec done. Checkup booked.
12:00  Today is empty. Done.
```

---

## License

This framework is open source. Use it, adapt it, build on it.
