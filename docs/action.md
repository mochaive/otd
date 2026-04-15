# Action

An Action is the smallest unit of work. Completable in a single day.

---

## What an Action is

An Action is one checkbox. One concrete thing to do. One day to do it in.

Every Action has:
- **A description** — what specifically to do
- **A Mode** — Do, Delegate, Await, or Review
- **An optional date** — when it should surface, if not immediately

Actions are the leaves of the OTD tree. Areas, Projects, and Flows are containers. Actions are what you actually do.

---

## The one-day constraint

This is not arbitrary. It's the mechanism that makes the whole system work.

OTD's core feedback loop is: **Today is empty → I'm done for the day.**

If an Action can't be completed in a day, it can't be checked off today. If it can't be checked off today, Today can never actually be empty. If Today can never be empty, you lose the completion signal. You're always working, never done, with no way to tell real progress from just being busy.

The constraint forces clarity. "Write the report" is not an Action — it's a multi-day blob. But look at what you actually do across those days:

| Day | What you actually do |
|-----|---------------------|
| Monday | Outline the structure |
| Tuesday | Write the first half |
| Wednesday | Write the second half |
| Thursday | Revise and polish |
| Friday | Final review and send |

Each of those is a real Action. Each is completable in a day. Each can be checked off and bring Today one step closer to empty.

The report doesn't take five days. Five different Actions take one day each.

---

## Good vs. weak Actions

**Good Actions are specific and bounded.**

- ✓ "Research three competitors' pricing pages and take notes"
- ✓ "Write the intro and background section of the proposal"
- ✓ "Send contract draft to client for review"
- ✓ "Book annual physical appointment — pick the earliest slot in the next two weeks"

**Weak Actions are vague or unbounded.**

- ✗ "Work on proposal" — work on which part? for how long? done when?
- ✗ "Research competitors" — all of them? for what purpose? produces what?
- ✗ "Deal with client" — what specifically?
- ✗ "Exercise" — this might be a habit, not an Action

The test: when the Action surfaces in Today tomorrow morning, can you start it immediately without additional thinking? If yes, it's specific enough. If you need to re-interpret it before you can begin, rewrite it.

---

## Actions in different positions

An Action can live in different places in the structure:

```
Area → Action                     Book health checkup
Area → Flow → Action              Update LinkedIn profile
Area → Project → Flow → Action    Write outline for application
```

There's no single "correct" depth. A standalone task that doesn't belong to any stream lives directly under an Area. A task that's part of a named workstream lives in a Flow. The structure reflects what's actually true about the work.

---

## Mode and Actions

Every Action has a Mode. The Mode tells you who handles it and what state it's in.

- **Do** — you execute it yourself
- **Delegate** — you hand it off to someone else (AI, coworker, vendor)
- **Await** — something external is in progress; you're waiting
- **Review** — a result is back; you inspect and decide

Mode is not an afterthought — it's part of how you define the Action when you process it from Inbox. Deciding the Mode at definition time means you never reach an Action and have to ask "wait, what am I actually supposed to do here?"

See [Mode](/mode) for how the four modes work together during execution.

---

## The 2-minute rule

If an Action takes less than 2 minutes, don't put it in the system. Do it immediately.

The overhead of capturing, placing, and reviewing an Action exceeds the effort of just doing it. Organizing a 90-second task is inefficient.

This rule is inherited directly from GTD. It applies identically in OTD.

The 2-minute rule applies during **Processing** (when you're going through Inbox), not during **Execution** (when you're working through Today). If a 2-minute task surfaces during Today, just do it — don't re-capture it.

---

## Actions with dates

An Action can have an optional date. This means it surfaces in Today on or after that date, rather than immediately.

Use dates for:
- Things that can't be acted on yet ("Call about lease renewal" — not relevant until 60 days before expiry)
- Things with a natural trigger date ("Prepare for Thursday's presentation" — needs to surface Wednesday)

Don't use dates as priority labels. If you add a date to every Action to control when it surfaces, you're re-scheduling your life manually and defeating the purpose of the system. Let Flows handle the sequence. Use dates only when there's a genuine temporal reason.

---

## Recurring Actions

A recurring Action re-enters the system after completion at a defined interval.

```
Action: [Do] Submit monthly expense report  (repeats: 1st of every month)
Action: [Do] Back up project files          (repeats: every Friday)
Action: [Do] Follow up with client          (repeats: 3 days after completion)
```

There are two types of recurrence:

**Fixed schedule** — surfaces on a specific date regardless of when the previous instance was completed. Use for work that is calendar-driven: weekly reports, monthly reviews, quarterly tax filings.

**Relative interval** — surfaces a set number of days after the previous completion. Use for work that depends on your own pace: "follow up 3 days after sending a proposal," "review notes 2 days after a meeting."

A recurring Action lives like any other Action in the structure — directly under an Area, or inside a Flow. The only difference is that completion triggers a new instance rather than marking it permanently done.

**When recurring work has multiple steps**, a single recurring Action isn't enough. Use a recurring Flow instead — see [Flow](/flow#recurring-flows).
