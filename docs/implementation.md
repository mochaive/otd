# Implementation

OTD is tool-agnostic at the concept level. But some mechanisms require tool support to work as designed. This page defines what a tool needs to implement OTD properly.

It serves two purposes: a spec for tool builders, and a checklist for users choosing a tool.

---

## Tier 1: Required

Without these, OTD's core mechanics break.

### Flow surfacing

Each active Flow's first uncompleted Action automatically appears in Today. When that Action is completed, the next Action in the Flow surfaces.

The user should not have to manually scan each Flow every morning to find where they left off. The system does this.

**Why it matters:** This is what makes Today trustworthy. Without it, users either manually recreate Today every day (friction), or miss work that should be surfacing (system drift).

### Mode visibility

Today items are distinguishable by Mode: Review, Delegate, Await, Do. The user can see at a glance which Mode each item is in, and work through them in order.

Await items are tracked separately from Today — they're visible but not in the active Today list.

**Why it matters:** Mode-based execution order (Review → Delegate → Do) is the core execution model. Without Mode visibility, it collapses into a flat undifferentiated list — the same problem as GTD's @computer list.

### Someday toggle

Any Project, Flow, or Action can be moved between active and dormant (Someday) states instantly. Dormant items stop surfacing Actions in Today and appear in a separate Someday view.

**Why it matters:** The ability to park work without deleting it is fundamental to managing workload without losing anything. If this is slow or buried, users will delete instead — and good ideas disappear.

### Inbox as single entry point

All new inputs land in Inbox first, regardless of source. The tool should make it frictionless to add to Inbox from anywhere — keyboard shortcut, quick-capture widget, API, mobile.

**Why it matters:** Capture discipline depends entirely on capture friction. If adding to Inbox requires navigation, users will skip it. Skipping means the system has gaps.

---

## Tier 2: Strongly Recommended

Without these, OTD works but with meaningful friction.

### Date-based surfacing

Actions with a specified date surface in Today on or after that date — not before.

Two types:
- **Absolute date:** surfaces on a specific date ("Feb 14")
- **Relative date:** surfaces a defined number of days after a trigger ("3 days after this Action is created")

**Why it matters:** Not all work is immediately actionable. Some Actions are premature until a date arrives. Without date-based surfacing, users either add everything to Today immediately (clutter) or rely on memory (system bypass).

### Recurring Actions and Flows

Actions and Flows can be marked as recurring with a defined interval:
- **Fixed schedule:** every Monday, 1st of each month
- **Relative interval:** N days after completion

On completion:
- A recurring Action re-enters the system at the next scheduled date
- A recurring Flow resets to its first Action and re-enters at the next scheduled date

Internally, implementations should create a new instance on each cycle (preserving history). The user experience is that the same Action or Flow starts fresh.

**Why it matters:** Recurring work is a significant portion of most people's actual work. Without recurring support, users must manually recreate Actions after each cycle — overhead that degrades system trust over time.

### Goal-Project association

During Review, users can associate Projects with Goals. A Goal can have multiple Projects; a Project can contribute to multiple Goals.

This association doesn't need to be a structural hierarchy — it's a tagging or linking relationship used during Quarterly Review to check alignment.

**Why it matters:** Without this, Goals and Projects exist in parallel with no visible connection. The Quarterly Review question ("are my Projects advancing my Goals?") becomes a manual mental exercise rather than something the tool can support.

### Review prompts

The tool surfaces reminders for the review cadences:
- Daily Review: each morning
- Weekly Review: once per week (user-defined day)
- Quarterly Review: once per quarter
- Annual Review: once per year

These don't need to be intrusive — a notification or a persistent indicator that the review is due is sufficient.

**Why it matters:** Review habits are the most commonly abandoned part of any productivity system. A prompt isn't a substitute for habit, but it removes the "I forgot it was time" failure mode.

---

## Tier 3: Optional but Useful

These extend OTD without being required.

### Capture integrations

Inbox can receive inputs from external sources: email, Slack, calendar invitations, GitHub notifications, API calls. All inbound items arrive as Inbox entries, regardless of source.

**Why it matters:** In a connected work environment, tasks arrive from many channels. Manual re-entry from each channel into Inbox is high-friction. Integrations reduce that friction without compromising the single-Inbox discipline.

### Flow templates

Frequently-used Flows can be saved as templates and instantiated with a single action. The template defines the Action sequence; each instance is a fresh copy.

**Why it matters:** Recurring Flows with Mode sequences (Delegate → Await → Review cycles) are powerful but tedious to rebuild from scratch. Templates make these reusable.

### Progress visibility

A view showing how many Actions are completed vs. remaining in each active Flow, and how Projects are progressing across their Flows.

**Why it matters:** Not required for daily execution, but useful during Weekly Review to quickly spot stuck Flows and stalled Projects without opening each one.

---

## What tools should NOT do

These behaviors undermine OTD's core principles.

**Auto-populate Today.** The tool surfaces Actions from Flows — that's Tier 1. But it should not decide which Actions to include or exclude based on priority scores, due dates, or AI inference. Today is designed by the user, not the system.

**Auto-prioritize within Today.** The order within each Mode is the user's call. The tool can suggest Mode order (Review → Delegate → Do), but should not reorder items within a Mode automatically.

**Force a specific project hierarchy.** OTD's Area → Project → Flow → Action structure should be supported, but tools shouldn't mandate that every item use all four levels. Standalone Actions under Areas, Flows without Projects — these are valid and should work cleanly.
