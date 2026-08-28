# Mode

Every Action has a Mode: who is executing it and what state it's in.

- **Do**: You execute this yourself.
- **Delegate**: You hand this off to someone or something else: a person, an AI agent, or a rule you wrote.
- **Await**: You're waiting for a result from a delegated action or external input.
- **Review**: A result has come back. You inspect it, then approve, reject, or re-delegate. Returned work enters here and nowhere else ([Principle 4](/principles#_4-nothing-lands-unreviewed)).

Delegate, Await, and Review also carry an **actor**: who is on the other side. See [Actor](#actor-who-is-on-the-other-side).

---

## Why Mode exists

In GTD, actions were filtered by physical context: @computer, @phone, @errands. The idea was that you'd batch tasks by the location or tool required, so you'd make calls when you had your phone and do computer work when you were at your desk.

That model made sense in the early 2000s. Today, most knowledge work happens at a computer. @computer covers 90% of everything. The filter became meaningless.

**Mode replaces physical context with execution state.** Instead of asking "where am I?" it asks "who is working on this, and what needs to happen next?"

This is not a minor tweak. The shift from context to Mode is what enables OTD's execution order (Review → Delegate → Do), which gives each day a clear structure regardless of what's in Today.

---

## The four Modes

### Do

You execute it yourself. Full stop.

Do Actions are things only you can do: writing, deciding, creating, analyzing, calling. Things where you are the only possible executor.

When a Do Action is checked, the work is done.

### Delegate

You hand this off to someone else: an AI, a coworker, a contractor, a service.

"Delegate" doesn't mean "use AI." It means: the execution will be performed by someone other than you. Delegating a task to a virtual assistant, a team member, or Claude all fall under the same Mode.

The key moment: you write or speak the instructions. That act (formulating and sending the instruction) is what you're completing. When you check a Delegate Action, you're acknowledging: instructions sent, ball in their court.

The Action then moves to **Await** in your Flow.

### Await

Something external is in progress. You're waiting for it.

Await Actions don't require you to do anything yet. They represent work that is either delegated and running, or dependent on something outside your control (a decision from a client, a document from a third party, a delivery).

The purpose of Await is visibility. In GTD, "Waiting For" was a separate list you checked occasionally. In OTD, Await is a first-class Mode. Every Await item is visible in your system. During Weekly Review, you explicitly check whether anything in Await has been waiting too long and needs follow-up.

Await Actions don't surface in Today automatically. They're tracked separately. When the result arrives, it becomes a **Review** Action. Arrival creates a Review; it never writes into your system directly ([Principle 4](/principles#_4-nothing-lands-unreviewed)).

### Review

A result is back. You look at it, decide, and move forward.

Review is where you close the loop on Delegated work. The question you're answering is one of:
- **Approve**: the result is good. Check the Review Action. The next Action in the Flow unlocks.
- **Reject**: the result is wrong or unwanted. It doesn't enter. The rejection stays visible, so nothing disappears silently.
- **Re-delegate**: the result isn't right, but the work still is. Create a new Delegate Action with revised instructions.
- **Revise yourself**: you'll take it from here. Convert to a Do Action and continue.

Review is often fast: a few minutes to look at a document, an AI output, or a colleague's work and decide whether to accept or push back. But it's a real decision. Skipping Reviews means Flows sit blocked for no reason.

**Review has a budget.** When delegation is cheap, returns arrive faster than judgment can keep up, and approving degenerates into a reflex (see **Approval-theater failure** in [Principle 2](/principles#_2-curate-your-day-design-your-life)). Cap how many Reviews you take on in a day. When the cap is reached, the machine waits. Agents stop handing work back, and unreviewed items age into Stuck Signals rather than piling up.

---

## Actor: who is on the other side

Delegate, Await, and Review are the same three Modes regardless of who executes. But the three actors fail differently, so it's worth naming which one you're dealing with.

| Actor | Volume & speed | How it fails | What it needs |
| --- | --- | --- | --- |
| **Human** | Slow, few | You forget you're waiting | Follow-up during Weekly Review |
| **Agent** | Fast, many, plausible | Volume outruns judgment | A Review budget and a hard return gate |
| **Rule** | Invisible while it works | You forget you wrote it | Being readable back as your own sentence |

A **rule** is a sentence you wrote that acts on your behalf: "anything untouched for two weeks goes to Someday." It's a real actor, not a setting, because it does work you would otherwise do.

The line that keeps a rule legitimate:

- A rule may **place what has newly arrived**: routing, sorting, tagging.
- A rule may **not change or remove what already exists** without passing through Review.
- Every action a rule takes is logged and reversible, and the rule itself stays visible as one line you can read and delete.

That boundary is what separates a rule from automation you no longer control. The moment you can't state a rule in your own words, it isn't yours anymore. Retire it.

---

## Execution order: Review → Delegate → Do

This is not a suggestion. It's the designed order for working through Today.

- **Review first.** Results are already waiting. Clearing a Review takes minutes and unblocks the next Action in that Flow. If you leave Reviews sitting, Flows that could be advancing are frozen.
- **Delegate second.** Sending instructions is fast. The sooner you send, the sooner results come back. While your delegate is working, you can work on other things. Every hour you delay a Delegate is an hour of parallel work you're not getting.
- **Do last.** Direct execution takes the most time and focus. By handling Reviews and Delegates first, you've set other Flows in motion. Now you can give your full attention to Do work without knowing you've left other things blocked.

Within the same Mode, the order is yours to decide. Choosing between two Do items is a lightweight call: it involves your judgment about priority, energy, and context. That's [Principle 2](/principles#_2-curate-your-day-design-your-life) at its lightest: a small curation moment, not a daily redesign. And Mode makes even that smaller. Instead of choosing between 10 undifferentiated items, you're choosing between 2-3 items in the same Mode.

---

## Mode scenarios

### Scenario 1: Writing a report with AI

```
[Do]       Write the structure and key arguments            ← you
[Delegate] Ask AI to draft sections 2-4 based on outline   ← AI
[Await]    Wait for AI draft                                ← waiting
[Review]   Read draft, decide what to revise                ← you
[Do]       Revise and finalize                              ← you
```

Five Actions. Two of them are Do. One is Delegate. One is Await. One is Review. The whole loop from decision to finished draft is visible in the Flow.

### Scenario 2: Hiring a contractor

```
[Do]       Write the brief and requirements
[Delegate] Post to platform / send to candidates
[Await]    Wait for proposals
[Review]   Evaluate proposals, select candidate
[Delegate] Send contract for signature
[Await]    Wait for signed contract
[Review]   Confirm contract received, proceed
[Do]       Onboard contractor
```

Loops of Delegate → Await → Review. Each cycle is tracked. Nothing falls through.

### Scenario 3: Waiting for external input

```
[Do]       Send renewal inquiry to landlord
[Await]    Wait for landlord's response
[Review]   Review lease terms
[Do]       Decide and respond
```

The Await here isn't delegated work. It's external. You sent an inquiry and now you wait. Same Mode. Same visibility.

---

## Doing Review well

Review is the mode most people underinvest in. It takes only minutes, but the quality of the decision you make determines whether the Flow advances cleanly or loops back into rework.

### What you're actually deciding

When a result arrives, you're answering one question: **is this good enough to move forward?**

Not "is this perfect?" Not "would I have done it differently?" The bar is: does this result allow the next Action in the Flow to proceed?

If yes, approve. Don't second-guess, don't polish, don't add scope. Move forward.

If no, be specific about what's wrong. Vague disapproval ("this isn't quite right") produces another vague result. The re-delegation instruction should say exactly what to fix: "The conclusion is too general. Make it specific to the B2B use case" is actionable. "Improve the conclusion" is not.

### Reviewing AI output specifically

AI output has a characteristic failure mode: it's fluent and plausible but wrong in a specific way you have to catch. The review discipline is different from reviewing human work.

- **Check for what's absent, not just what's present.** AI tends to give you what you asked for in the framing you gave. If your framing was incomplete, the output will be complete-looking but missing something. Ask: "What did I expect that's not here?"
- **Spot the confident errors.** AI is equally fluent when it's right and when it's wrong. Scan for factual claims, numbers, and attributions. These are the most common sources of confident errors.
- **Don't edit what should be re-delegated.** If more than 20-30% of the output needs changing, re-delegate with better instructions rather than editing yourself. Editing an output that's fundamentally off-track is slower than starting over with a better prompt.

### When to stop delegating and just Do it

There's a point in every re-delegation cycle where it becomes faster to do the work yourself than to keep refining instructions. That point is usually:

- Third re-delegation on the same Action
- The fix requires context that's hard to articulate in instructions
- The remaining work is faster to do than to explain

When you hit that point, convert the Review Action to a Do Action. Don't treat this as a failure. It's a judgment call: the same judgment you'd make about any delegated work.

---

## Managing a large Await list

As delegation becomes a larger part of how you work (especially with AI), Await items accumulate. Ten, twenty Await items at once is normal. Without a management approach, they become an opaque pool of "stuff I sent out and am vaguely waiting for."

### Classify by expected return time

Not all Await items have the same urgency. When you create an Await item, note when you expect the result:

- **Hours**: AI responses, quick questions to colleagues
- **Days**: document reviews, external approvals, vendor responses  
- **Weeks**: contract negotiations, long-form research, regulatory processes

This classification tells you which Await items to check first during Weekly Review and when a follow-up is actually needed versus premature.

### The follow-up decision

An Await item needs follow-up when:
- It's past the expected return window
- It's blocking the next Action in a Flow that matters now
- External circumstances have changed (the person you delegated to is now unavailable)

An Await item does not need follow-up when:
- It's within the expected window
- The downstream Flow is not currently time-sensitive
- Following up would add friction without adding value

Following up on everything equally is as bad as following up on nothing. Triage by what's actually blocking you.

### Batching follow-ups

When multiple Await items need follow-up, batch them. Write all follow-up messages in one session during your Delegate phase (not scattered through the day). This keeps your Await list moving without fragmenting your focus.

### Await and Weekly Review

During Weekly Review, scan the entire Await list and ask for each item:
1. Is this past its expected window?
2. Is the downstream Flow blocked and currently important?
3. Has anything changed that makes this more or less urgent?

Items that answer yes to (1) and (2) get a follow-up Action in next week's work. Items that answer no to both can wait.

---

## Mode in GTD terms

| GTD | OTD Mode | Difference |
|-----|----------|------------|
| Next Action | **Do** | Same |
| *(delegation as implied)* | **Delegate** | Explicit, first-class |
| Waiting For | **Await** | Promoted to primary Mode |
| *(no equivalent)* | **Review** | New: inspection of returned results |

The biggest addition is Review. GTD had no dedicated concept for inspecting delegated work. Results just landed somewhere and you found them eventually. OTD makes the inspection step explicit, trackable, and timed correctly in the execution order.
