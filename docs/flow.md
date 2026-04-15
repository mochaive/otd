# Flow

A Flow is a specific stream of work with ordered steps. Sequential inside, parallel across.

---

## Flow or Project?

This is the most important decision in OTD's structure. The criterion is one question:

> **"Can I work on multiple independent parts of this at the same time?"**

```
Can multiple independent parts run at the same time?
  │
  ├─ Yes →  Project  (multiple parallel Flows)
  │              Each Flow surfaces one Action in Today
  │
  └─ No  →  Flow  (one sequential thread)
                  One Action at a time, in order
```

**Yes → Project** (contains multiple parallel Flows)
**No → Flow** (one sequential thread)

"Job search" as a Flow:
```
Flow: Job search
1. Update resume
2. Shortlist target companies
3. Submit applications
4. Prepare for interviews
5. Negotiate offer
```
One thread. Each step follows the previous.

"Job search" as a Project:
```
Project: Job search
  ├─ Flow: Resume & portfolio   (can run in parallel with ↓)
  ├─ Flow: Company research     (can run in parallel with ↓)
  └─ Flow: Networking           (can run in parallel with ↑)
```
Three independent streams. All advance simultaneously.

Neither is wrong — it depends on how the work actually unfolds for you.

---

## What a Flow is

A Flow is where work actually happens in OTD. It's a named stream of sequential Actions aimed at a specific outcome. When a Flow has at least one uncompleted Action, it's active — and its first uncompleted Action surfaces in Today.

```
Flow: Write application
  1. [Do]       Research eligibility requirements     ← surfaces in Today
  2. [Do]       Write outline
  3. [Delegate] Send draft to mentor for feedback
  4. [Await]    Wait for mentor's response
  5. [Review]   Review mentor feedback
  6. [Do]       Final revisions
  7. [Do]       Submit
```

Step 1 is in Today. You complete it. Step 2 surfaces. You complete it. And so on. The Flow handles the "what's next?" question inside its domain.

---

## Sequential inside, parallel across

This is the core design of Flow.

**Sequential inside:** Actions within a Flow have a natural order. The next one surfaces only after the current one is done. You don't have to decide the sequence each morning — the Flow has already decided it.

**Parallel across:** Multiple Flows surface their first Action in Today simultaneously. Three active Flows means three Actions potentially in Today at once, from three different streams of work. They advance independently.

This is the key departure from GTD. GTD's projects were one sequential chain. OTD's Flows are multiple independent chains running at the same time, each surfacing its front action.

---

## When you break the sequence

Sequential order is the default, not a constraint. You're the orchestrator — you can override it.

If you want to work on two Actions from the same Flow at once, manually pull the second one into Today. The system provides order; you break it when you judge it appropriate.

**When it makes sense to break sequence:**
- The second Action no longer depends on the first (e.g., you have information you need without completing step 1)
- You want to start something in parallel to take advantage of waiting time
- External circumstances changed and the original order no longer applies

**When it doesn't:**
- You're just feeling impatient
- Breaking it means the second Action can't actually be completed without the first
- You're avoiding the first Action by jumping ahead

The system assumes sequence. Override it consciously, not reflexively.

---

## Flow placement

A Flow lives in one of two places:

**Directly under an Area** — when it's a standalone stream of work not sharing a goal with other Flows:
```
Area: Career
  └─ Flow: Job search
```

**Inside a Project** — when multiple Flows share a common goal:
```
Area: Career
  └─ Project: Company transition
       ├─ Flow: Job search
       ├─ Flow: Skill gap prep
       └─ Flow: Financial runway planning
```

The question is: does this Flow share a goal with other Flows? If yes, group them under a Project. If no, put the Flow directly under the Area.

---

## Designing a Flow well

The quality of a Flow depends on how you define its Actions. A well-designed Flow gives you a clear, unambiguous "what to do next" every morning.

**Good Flow:**
```
Flow: Prepare visa application
  1. [Do]       List all required documents
  2. [Do]       Gather personal documents (ID, passport copy)
  3. [Delegate] Request employment verification letter from HR
  4. [Await]    Wait for employment letter
  5. [Review]   Check letter is correct
  6. [Do]       Complete application form
  7. [Do]       Book appointment at consulate
  8. [Do]       Submit application
```

Each Action is specific, completable in a day, and unambiguous. You know exactly what to do when it surfaces.

**Weak Flow:**
```
Flow: Prepare visa application
  1. [Do] Work on visa stuff
  2. [Do] More visa stuff
  3. [Do] Finish application
```

These aren't Actions — they're vague intentions. When they surface in Today, you'll stare at them and wonder what you actually need to do.

---

## Promoting a Flow to a Project

You start with one Flow. As work progresses, you realize separate workstreams have emerged that are better handled in parallel. At that point, promote the Flow to a Project.

**Signs it's time to promote:**
- You've added so many Actions that they're actually two or three independent threads
- You want to delegate one part while continuing another
- The "Flow" has become too broad to have a clear sequential order

**How to promote:**
1. Create a Project with the same name
2. Split the original Flow's Actions into multiple Flows by workstream
3. Move all Flows under the new Project

```
Before — one Flow getting unwieldy:
Flow: Launch website
  1. Write copy
  2. Design mockups
  3. Build the site
  4. Set up analytics
  5. SEO audit
  6. Announce on social media

After — promoted to Project:
Project: Launch website
  ├─ Flow: Content & design  (copy → mockups → final review)
  ├─ Flow: Development       (build → analytics → SEO)
  └─ Flow: Launch            (soft launch → announce → monitor)
```

---

## Someday Flows

A Flow you're not working on now moves to Someday. It doesn't surface Actions in Today. It appears in your Weekly Review for consideration.

This is different from deleting a Flow. You're not abandoning it — you're parking it. When circumstances change (time frees up, opportunity returns, the goal becomes relevant again), you activate it and it starts surfacing Actions again.

---

## Flows and the completion signal

Every active Flow continuously surfaces its next Action. The system keeps moving forward on its own — you just have to do each Action when it arrives.

This means the only way to "finish" a Flow is to complete all its Actions. When the last Action is checked, the Flow is done. That completion feeds directly into the Project's status (if it's inside one) and eventually into the Area's health.

This chain — Action → Flow → Project → Area — is what makes OTD a coherent system rather than a collection of isolated tasks.

---

## Recurring Flows {#recurring-flows}

A recurring Flow resets after all its Actions are completed, and re-enters the system at the next scheduled interval.

```
Flow: Weekly report  (repeats: every Friday)
  1. [Do]       Summarize this week's progress    ← resets here next Friday
  2. [Do]       Write draft
  3. [Delegate] Send to manager for review
  4. [Await]    Wait for feedback
  5. [Review]   Process feedback and finalize
```

When the last Action is completed, the Flow resets to Action 1. On the next scheduled date, Action 1 surfaces in Today again — as if the Flow is starting fresh.

**From the user's perspective:** the same Flow starts over each cycle.
**From the tool's perspective:** a new instance is created internally, preserving history. What the user sees is a fresh state.

Use a recurring Flow when:
- The work repeats regularly and involves more than one step
- The sequence matters and should be enforced each cycle
- Examples: weekly reports, monthly reviews, sprint retrospectives, onboarding checklists

Use a recurring Action (not a Flow) when:
- The recurring work is a single step
- Examples: expense submission, a standing check-in message, a recurring backup

**Recurrence and Mode:** Recurring Flows can include Delegate and Await Actions. Each new cycle sends new delegation instructions and starts a new Await cycle. The Mode structure works identically for recurring and one-time Flows.
