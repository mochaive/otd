# GTD to OTD

A migration guide for existing GTD users. What maps to what, what changes, and what to keep exactly as-is.

---

## Concept mapping

| GTD | OTD | Notes |
|-----|-----|-------|
| Inbox | **Inbox** | Same. Capture channels are wider. |
| Clarify / Process | **Process** | Adds "who executes?" (Mode) to the decision |
| Area of Responsibility | **Area** | Identical |
| Project | **Flow** | Parallel across Flows, sequential within each |
| Next Action | **Action** | Same: completable in a day |
| Context (@computer, @phone) | **Mode** (Do/Delegate/Await/Review) | Execution state replaces physical context |
| Waiting For | **Await** | Promoted to first-class Mode |
| Someday/Maybe | **Someday** | Same concept |
| Reference | **Reference** | Same. Also holds Vision and Purpose. |
| Weekly Review | **Daily Review + Weekly Review + Quarterly + Annual** | Full review rhythm |
| Calendar | **Calendar** | Unchanged |
| 2-Minute Rule | **2-Minute Rule** | Kept as-is |
| Goals (H3) | **Goals** | Independent list. Mapped to Flows during Quarterly Review. |
| Vision (H4) | **Reference** | Stored as a document. Reviewed annually. |
| Purpose/Principles (H5) | **Reference** | Stored as a document. Reviewed annually. |

---

## What doesn't change

These GTD principles carry over intact:

- **Capture everything.** The Inbox habit is non-negotiable in both systems. If anything, OTD reinforces this — with wider capture channels, the discipline of routing everything through Inbox matters more.
- **Process to zero.** Inbox zero is still the goal. The processing questions are slightly different, but the habit of deciding what each item is — rather than letting it sit — is unchanged.
- **Review regularly.** GTD's Weekly Review survives in OTD with an added daily rhythm. The core purpose is identical: a regular audit to keep the system current.
- **The 2-minute rule.** Kept without modification. If it takes less than 2 minutes, do it now.
- **Actions completable in a day.** GTD's "Next Actions" must be physically completable in one sitting. OTD's Actions must be completable in one day. Same constraint, same reasoning.
- **Reference filing.** Non-actionable information goes to Reference. Unchanged.
- **Someday/Maybe.** Parking things you might do later. Same concept, extended to Flows in OTD.

---

## What changes

### GTD Project → OTD Flow

This is the most significant conceptual shift.

In **GTD**, a "project" is anything requiring more than one action step. "Get car serviced" is a GTD project if it requires making an appointment and then dropping off the car.

In **OTD**, that's a **Flow** — a single stream of sequential work. OTD has no higher "Project" container.

**Migration:** Your GTD projects become OTD Flows. When multiple Flows belong to the same larger goal, group them with a shared `[[keyword]]` prefix on their names — no separate container required.

### Physical contexts → Mode

**GTD** filters actions by where you are: @computer, @phone, @errands, @home.

**OTD** organizes actions by who handles them and what state they're in: Do, Delegate, Await, Review.

In a world where most work happens at a computer, @computer covers everything and the context filter becomes meaningless. Mode provides a genuinely useful organizing principle instead.

**Migration:** Stop tagging actions with context. Instead, assign a Mode to every Action when you process it. The Mode drives execution order (Review → Delegate → Do), which is more useful than context-based filtering.

### Waiting For → Await (promoted)

In **GTD**, "Waiting For" was a separate list — important, but a bit of a second-class citizen. You'd check it occasionally to see if something had come back.

In **OTD**, **Await** is a first-class Mode. Every Await item is tracked in the system with full visibility. It appears in Weekly Review. It gets followed up systematically.

The promotion matters because delegation is more frequent now. If you're using AI for execution, you might have a dozen Await items on any given day. Treating them as a secondary list creates blind spots.

**Migration:** Anything in your GTD "Waiting For" list becomes an Await Action in OTD. Move it to the appropriate Flow.

### Sequential projects → parallel Flows

**GTD** was designed for one-thing-at-a-time focus. Its project model was implicitly sequential — you work through your project list, one project at a time.

**OTD** is designed for parallel orchestration. Multiple Flows advance simultaneously. Each surfaces its next Action independently. You can be advancing three projects in parallel on the same day.

**Migration:** This doesn't require changing how you capture or process. It changes how you think about your active work. Instead of asking "which project should I focus on this week?", you ask "which Flows do I want to advance today?" They can all advance every day, one Action each.

---

## Common migration mistakes

- **Looking for a container above Flow.** There isn't one. Your GTD "projects" are just OTD Flows. When multiple Flows share a goal, group them with a `[[keyword]]` prefix — not a container.
- **Keeping context tags.** Contexts don't do useful work in OTD. Remove them. Mode is doing their job now.
- **Resisting parallel Flows.** GTD trained you to focus on one thing at a time. OTD allows parallel work. Let yourself advance multiple Flows per day. Trust the system to surface one Action per Flow so the volume stays manageable.
- **Over-migrating.** You don't have to convert everything perfectly before you start. Process your Inbox with OTD's two questions. Let the structure build itself as you work. Perfect migration is not required — working migration is.

---

## What not to change

If you've built strong GTD habits, don't throw them out in the migration. The practices that work are worth preserving:

- Your Inbox capture habit — keep it exactly as-is, just widen the channels
- Your Weekly Review time — keep the slot, update the checklist
- Your Reference system — unchanged
- Your 2-minute rule reflex — unchanged

OTD is an evolution of GTD, not a replacement. The gap it fills is specific: parallel work, explicit delegation tracking, Mode-based execution, and a connected review rhythm from daily to annual. Everything else is GTD.

---

## Horizons of Focus

GTD introduced six horizons for thinking about your work at different altitudes. OTD covers all six, organized differently.

| GTD Horizon | OTD |
|---|---|
| H0: Next Actions | Actions (in Today) |
| H1: Projects | Flows (sequential workstreams) |
| H2: Areas of Focus | Areas |
| H3: Goals | Goals (independent list, quarterly review) |
| H4: Vision | Reference (3–5 year picture, annual review) |
| H5: Purpose/Principles | Reference (core values, annual review) |

The key structural difference: GTD treats all six horizons as separate lists with no explicit connection mechanism. OTD builds the connections in:

- **Goals** map to **Flows** during Quarterly Review
- **Vision** informs whether your **Goals** are pointing in the right direction
- **Purpose** is the check on whether your **Vision** reflects what you actually value

The cascade runs both ways: Purpose → Vision → Goals → Flows → Actions → Today. And every Review level checks alignment with the level above it.

The migration doesn't have to happen in one session. Many people run a hybrid system during transition — processing new items with OTD's questions while existing GTD projects gradually migrate as they're worked through. That's fine.
