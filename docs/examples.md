# Examples

OTD in practice, across different personas and scenarios. Each shows how the framework adapts to real life rather than ideal conditions.

---

## Day zero: starting from nothing

For someone with no prior productivity system — no GTD, no app, just a chaotic mental list and a vague sense of falling behind.

**The situation:**

Ji-woo is a 28-year-old UX designer at a mid-size company. She has no task management system. She tracks work in a mix of sticky notes, Slack bookmarks, a personal chat with herself, and her memory. She forgets things. She feels behind. She agreed to try OTD.

**Her first session (Sunday evening, ~90 minutes):**

**1. Brain dump (30 min)**

She opens a blank note and types everything she can think of. No filtering:

```
- Complete UI audit for the mobile app
- Reply to Jake about the design system handoff
- I said I'd help Mia with her portfolio review
- Sign up for that Figma advanced course
- Doctor appointment — overdue
- Research competitor apps for Q3 strategy
- My laptop fan sounds weird, get it checked
- Read "Shape Up" (been on my desk for 6 months)
- Expense reports from the Seoul trip
- Update my personal site — it's 3 years old
- Annual performance review is coming up, need to think about it
- Call mom back
```

47 items. She gets them all out.

**2. Areas (10 min)**

Looking at the list, she sees natural groupings:

```
Areas:
- Work
- Learning
- Health
- Personal
- Finance
```

**3. Process Inbox (40 min)**

She goes through each item:

*"Complete UI audit"* → Actionable. Do. But it's too big. She breaks it: "Define audit scope and checklist" (Day 1), "Audit navigation flows" (Day 2), "Audit form and input components" (Day 3). Three Actions, three days.

→ `Area: Work → Flow: Mobile app UI audit`

*"Reply to Jake"* → Actionable. Takes 5 minutes. She does it now. 2-minute rule (close enough). Deleted from list.

*"Help Mia with portfolio review"* → Actionable. Do. Single Action: "Schedule 1hr with Mia for portfolio review."

→ `Area: Work → Action (standalone)`

*"Figma advanced course"* → Actionable eventually. Not urgent. Someday.

*"Doctor appointment"* → Actionable. Do. "Book annual physical — find earliest slot."

→ `Area: Health → Action (standalone)`

*"Research competitor apps"* → Actionable. Too big. She breaks it: "List 8 competitors to research" → "Audit competitors 1–4" → "Audit competitors 5–8" → "Write summary for Q3 deck."

→ `Area: Work → Flow: Q3 competitor research`

*"Laptop fan"* → Actionable. 2 minutes: she books a tech support appointment right now.

*"Read Shape Up"* → Someday. Not urgent.

*"Expense reports"* → Actionable. Do. "Submit Seoul trip expenses — receipt photos in Photos app."

→ `Area: Finance → Action (standalone)`

*"Update personal site"* → Someday. She'd like to, but not now.

*"Performance review"* → Actionable. She creates a Flow: "Write self-evaluation draft" → "Collect impact examples" → "Review with manager."

→ `Area: Work → Flow: Performance review prep`

*"Call mom back"* → 2-minute rule. She calls right now.

**Her system after first setup:**

```
Area: Work
  ├─ Flow: Mobile app UI audit
  │    └─ [Do] Define audit scope and checklist   ← surfaces tomorrow
  ├─ Flow: Q3 competitor research
  │    └─ [Do] List 8 competitors to research     ← surfaces tomorrow
  ├─ Flow: Performance review prep
  │    └─ [Do] Write self-evaluation draft        ← surfaces tomorrow
  └─ Action: [Do] Schedule 1hr with Mia

Area: Health
  └─ Action: [Do] Book annual physical

Area: Finance
  └─ Action: [Do] Submit Seoul trip expenses

Someday: Figma course, personal site update, Shape Up
```

**Her first Today (Monday morning, 8 minutes):**

Five Actions surface automatically. She adds nothing, removes nothing. Looks right.

```
[Do] Define audit scope and checklist
[Do] List 8 competitors to research
[Do] Write self-evaluation draft
[Do] Schedule 1hr with Mia
[Do] Book annual physical
[Do] Submit Seoul trip expenses
```

She starts with the ones she can batch (the two quick admin items: book appointment, submit expenses — done in 15 minutes). Then focused work on the three project Actions.

By 1pm: Today is empty. Six things done. Three active work streams advancing simultaneously. Expense report filed. Doctor booked.

**What changed:**

Before OTD: 47 items in her head, sticky notes, and a personal Slack. Constant background anxiety. No clear "done" signal.

After OTD: The same 47 items are in a system. She touched all of them in one evening — decided on each one, placed it, or deleted it. The next morning, six of them are ready to work on. The rest will surface when they're relevant.

The work didn't change. The overhead of managing it did.

---

## The classic day

The example from the README, expanded.

**System state:**
```
Area: Side Projects
  ├─ Flow: [[App launch]] Build MVP
  │    └─ [Do] Write technical spec for auth module    ← active
  └─ Flow: [[App launch]] Launch marketing
       └─ [Delegate] Ask AI to draft landing page copy ← active

Area: Career
  └─ Flow: Job search
       └─ [Review] Review salary research from yesterday ← active

Area: Health
  └─ [Do] Book annual checkup                          ← standalone Action
```

The two `[[App launch]]` Flows belong to the same goal. They land next to each other under sort, but the framework treats them as independent Flows. "Job search" is the only Flow serving its goal, so it carries no prefix.

**Daily Review (07:00, 5 minutes):**

Today surfaces automatically:
- [Review] Review salary research from yesterday
- [Delegate] Ask AI to draft landing page copy
- [Do] Write technical spec for auth module
- [Do] Book annual checkup

Looks right. No additions needed. Begin.

**Execution:**

08:00 — **Review phase**
Open the salary research. Scan the numbers. The data is solid — approve.
Check [Review]. The next Action in the Job Search flow unlocks: "Identify target companies in the salary range." That Action will surface in Tomorrow's Daily Review.

09:00 — **Delegate phase**
Write the landing page prompt: "Draft a landing page for a developer tool that helps teams manage async work. Tone: clear and direct. Include: headline, three feature bullets, one CTA. No fluff."
Send to AI. Check [Delegate]. This Action moves to Await in the [[App launch]] Launch marketing flow.

10:00 — **Do phase**
Open the auth module spec. Spend 90 minutes writing. Done. Check [Do].
Next Action in the [[App launch]] Build MVP flow unlocks: "Review spec with the team."

Quick break. Book the checkup — it takes 3 minutes. Check [Do].

12:00 — **Today is empty.**

Three Flows advanced today. Four Actions completed. One result approved. One Delegate in progress. Done.

---

## Persona: The employee with side projects

**Before OTD:** Every Sunday, the plan was to work on the side project. Every Sunday, the day job spilled over — a Slack message, an unfinished doc, an "urgent" request that could have waited. By evening, the side project still hadn't moved. This had been going on for four months.

**Profile:** Daytime job as a product manager. Side project building a SaaS tool. Wants to advance both without either consuming the other.

**Challenge:** Day job generates constant reactive work. Side project needs proactive, focused time. Without a system, the side project always loses.

**Their Area setup:**
```
Areas: Work, SaaS Project, Health, Finance, Personal
```

**Their Flow setup:**
```
Area: Work
  ├─ Flow: Q2 product roadmap
  ├─ Flow: Stakeholder alignment (ongoing)
  └─ Flow: Hire PM intern (project)

Area: SaaS Project
  ├─ Flow: MVP feature development
  ├─ Flow: Early user interviews
  └─ Flow: Landing page
```

**How Today looks on a typical day:**

Work Flows surface: a roadmap review, a stakeholder Slack thread to respond to, an interview question to prep.

SaaS Flows surface: next development task, one user interview email to send, one landing page section to write.

The system ensures both advance every day. Not a lot of progress on either per day — but consistent, daily progress on everything.

**The key insight:** Without OTD, this person would spend their day reacting to work, feel too drained to touch the side project, and tell themselves they'll "do it on the weekend." With OTD, the side project's Actions are in Today next to work Actions. They get done in the same workday.

---

## Persona: The freelancer

**Before OTD:** A client sent feedback three days ago. It was somewhere in email. Or was it in the shared folder? The project had been waiting on revisions for a week, but the designer wasn't sure whose turn it was. Two other clients were also waiting on something. The mental overhead of tracking "who has what, who needs what from me" was consuming more time than the actual design work.

**Profile:** Graphic designer with 3–4 active clients at any time. Each client has ongoing work and new project requests.

**Challenge:** Multiple clients, multiple timelines, lots of Review cycles (sending work, waiting for feedback, revising). Easy to drop balls.

**Their key flow pattern:**

For every client project:
```
Flow: [Client] [Project name]
  1. [Do]       Brief review and questions
  2. [Do]       First draft
  3. [Delegate] Send draft for client review
  4. [Await]    Wait for client feedback
  5. [Review]   Process feedback
  6. [Do]       Revisions based on feedback
  7. [Delegate] Send revised version
  8. [Await]    Final approval
  9. [Review]   Approve and close
 10. [Do]       Invoice
```

This pattern repeats per project. With 4 clients and multiple projects each, they might have 8–12 active Flows.

**How Today looks:**

Many Await items (tracked separately, not in Today). But on any given day:
- 2–3 Review items (feedback arrived overnight)
- 2–3 Delegate items (sending work out)
- 2–3 Do items (actual design work)

The Review items surface first. They clear the feedback backlog and unblock those Flows. Then Delegates go out. Then Do items: focused design time.

**The key insight:** Without tracking Await/Review explicitly, client feedback falls through cracks. With the Mode structure, every ball is in the system. Nothing is "oh I thought you were handling that."

---

## Persona: The student

**Before OTD:** The thesis had been "in progress" for six months. There was a folder with some notes, a half-written outline, and a vague intention to work on it "when things slow down." Things never slowed down. Coursework deadlines were always more urgent. The thesis kept getting pushed. The anxiety about the thesis kept growing, but the thesis itself didn't move.

**Profile:** Master's student, thesis in progress, coursework, part-time job, trying to maintain a social life.

**Challenge:** Long-horizon work (thesis) competes with short-horizon work (coursework deadlines). Both feel urgent or neither does. Easy to neglect the thesis for weeks because no single day's thesis work feels urgent.

**Their Area setup:**
```
Areas: Thesis, Coursework, Part-time Work, Personal
```

**Their key Flow pattern:**

For the thesis:
```
Flow: Chapter 2 — Literature Review
  1. [Do]       Identify 20 core papers
  2. [Do]       Read and annotate papers 1–5
  3. [Do]       Read and annotate papers 6–10
  ...
  8. [Do]       Write first draft of section 2.1
  9. [Do]       Write first draft of section 2.2
  ...
 14. [Do]       Full chapter first draft
 15. [Delegate] Send to advisor for feedback
 16. [Await]    Wait for advisor feedback
 17. [Review]   Process advisor feedback
 18. [Do]       Revisions
```

The thesis chapter is broken into small, daily Actions. Every day, one thesis Action surfaces in Today.

**How Today looks on a thesis + coursework day:**

- [Review] Check TA's feedback on last seminar paper
- [Do] Read and annotate papers 3–5 (thesis)
- [Do] Write problem set solution for Tuesday's class
- [Do] Work shift (timed, calendar-blocked)

The thesis is always in Today — one Action. It doesn't dominate the day. It doesn't disappear for weeks.

**The key insight:** "I'll work on my thesis when I have a big block of time" is how theses don't get written. OTD makes every day a thesis day — just one Action per day, every day.

---

## Persona: The manager

**Before OTD:** The "Waiting For" list had 23 items. Some were from last week, some from last month. The manager knew roughly what was pending, but "roughly" was the problem — twice in the past month, something had slipped through because it got buried. Every Friday there was a vague dread: what did I forget to follow up on? The coordination work was real, but invisible.

**Profile:** Engineering manager. Half their work is coordination, delegation, and unblocking — not execution.

**Challenge:** Most of their work is Delegate → Await → Review cycles. GTD's project model didn't capture this well. "Waiting For" was always a long list they dreaded.

**Their Mode distribution on a typical day:**

Today contains:
- 4 Review items (pull requests to approve, documents to sign off, reports to read)
- 5 Delegate items (feedback to give, requests to send, decisions to communicate)
- 2 Do items (actual execution — writing, analysis)

**How execution looks:**

Morning Review phase: 30–40 minutes clearing decisions. Several Flows unblock. One PR requires a re-review — create a new Review Action.

Delegation phase: 20 minutes sending feedback, requests, instructions. Five things go out. Five Await items start their clock.

Do phase: 60 minutes of focused work on the two remaining items.

Done by lunch. Afternoon is for meetings (calendar, not Today).

**The key insight:** A manager's work is mostly the system's overhead — facilitating others' work. OTD makes that overhead visible and executable. Instead of a vague sense of "I need to follow up on things," every Await item is tracked and surfaces when follow-up is needed.

---

## Handling a disrupted day

Some days Today doesn't survive contact with reality. A production incident. A surprise meeting. An urgent request that genuinely can't wait.

**The principle: accept, adjust, continue.**

When something urgent arrives mid-day:
1. Capture it in Inbox (even mid-day)
2. Process: is it actionable today? Yes.
3. Pull it into Today.
4. If it displaces something else, consciously accept that.

At end of day, if Today isn't empty:
- Did the undone items become unnecessary? Trash them.
- Do they still need to happen? They surface again tomorrow.
- Was Today systematically overloaded? Plan fewer Actions tomorrow.

An empty Today is the goal, not a requirement. Some days the goal moves. That's fine — as long as you're clear about what moved and why.
