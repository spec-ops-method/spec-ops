# SpecOps Frequently Asked Questions

This FAQ addresses common questions, concerns, and misconceptions about the SpecOps methodology for legacy system modernization.

---

## Table of Contents

**About SpecOps**
- [What is SpecOps?](#what-is-specops)
- [Who is SpecOps for?](#who-is-specops-for)
- [What problems does SpecOps solve?](#what-problems-does-specops-solve)

**Comparisons to Other Approaches**
- [Isn't this just BDD/ATDD for legacy systems?](#isnt-this-just-bddatdd-for-legacy-systems)
- [Isn't SpecOps just waterfall with AI?](#isnt-specops-just-waterfall-with-ai)
- [Can't I just use BDD/TDD to describe my existing system?](#cant-i-just-use-bddtdd-to-describe-my-existing-system)
- [How is this different from direct AI code translation?](#how-is-this-different-from-direct-ai-code-translation)
- [What about other specification approaches like Formal Methods?](#what-about-other-specification-approaches-like-formal-methods)

**Getting Started**
- [Do I need to specify everything before I can start implementing?](#do-i-need-to-specify-everything-before-i-can-start-implementing)
- [What if I don't have domain experts available?](#what-if-i-dont-have-domain-experts-available)
- [What tools do I need to get started?](#what-tools-do-i-need-to-get-started)
- [How long does it take to see results?](#how-long-does-it-take-to-see-results)
- [Can I use SpecOps on just part of my legacy system?](#can-i-use-specops-on-just-part-of-my-legacy-system)

**AI and Technology**
- [What if AI generates incorrect specifications?](#what-if-ai-generates-incorrect-specifications)
- [Which AI coding tools work with SpecOps?](#which-ai-coding-tools-work-with-specops)
- [Do I need AI expertise on my team?](#do-i-need-ai-expertise-on-my-team)
- [What about AI hallucinations?](#what-about-ai-hallucinations)
- [Will SpecOps work with future AI tools?](#will-specops-work-with-future-ai-tools)

**Specifications and Documentation**
- [How detailed should specifications be?](#how-detailed-should-specifications-be)
- [What format should specifications use?](#what-format-should-specifications-use)
- [How do I keep specifications in sync with code?](#how-do-i-keep-specifications-in-sync-with-code)
- [What if the legacy system has bugs we want to fix?](#what-if-the-legacy-system-has-bugs-we-want-to-fix)

**Implementation and Process**
- [Can SpecOps work with agile/scrum?](#can-specops-work-with-agilescrum)
- [How does SpecOps integrate with Strangler Fig?](#how-does-specops-integrate-with-strangler-fig)
- [What about incremental deployment?](#what-about-incremental-deployment)
- [How do I handle changing requirements?](#how-do-i-handle-changing-requirements)

**Team and Organization**
- [How big does my team need to be?](#how-big-does-my-team-need-to-be)
- [Do I need people who know the legacy language?](#do-i-need-people-who-know-the-legacy-language)
- [How do I get executive buy-in?](#how-do-i-get-executive-buy-in)
- [Can contractors do this or does it require government staff?](#can-contractors-do-this-or-does-it-require-government-staff)

**Collaboration and Sharing**
- [Can we share instruction sets with other agencies?](#can-we-share-instruction-sets-with-other-agencies)
- [What can be shared vs. what must stay internal?](#what-can-be-shared-vs-what-must-stay-internal)
- [How do I contribute to the SpecOps community?](#how-do-i-contribute-to-the-specops-community)

**Success and Measurement**
- [How do I measure success?](#how-do-i-measure-success)
- [What are the biggest risks?](#what-are-the-biggest-risks)
- [What could cause SpecOps to fail?](#what-could-cause-specops-to-fail)
- [Is there a reference implementation I can study?](#is-there-a-reference-implementation-i-can-study)

---

## About SpecOps

### What is SpecOps?

**SpecOps** (Specification-Driven Operations) is a methodology for modernizing legacy government systems using AI to generate comprehensive, human-verified specifications that become the authoritative source of truth for system behavior.

Rather than directly translating legacy code to modern code (transpilation), SpecOps focuses on extracting and preserving institutional knowledge in specifications (compilation) that guide modern implementation.

**Key principles**:
- Specifications are more valuable than code
- Domain experts verify specifications
- AI assists analysis and generation
- Knowledge preservation is as important as modernization
- Specifications are version-controlled source of truth

See the [Manifesto](public/MANIFESTO.md) for complete philosophy.

---

### Who is SpecOps for?

**Primary audience**: Government agencies modernizing legacy systems where:
- Business logic is complex and must be implemented correctly
- Institutional knowledge is at risk (retiring workforce)
- Domain experts are available but can't verify code
- Long-term knowledge preservation is valuable
- Systems will be maintained over decades

**Also valuable for**:
- Private sector companies with similar challenges
- Regulated industries requiring careful modernization
- Any organization where understanding existing systems is harder than building new ones

---

### What problems does SpecOps solve?

**Knowledge Loss**: Captures institutional knowledge before experts retire

**Verification Gap**: Enables non-technical domain experts to validate system behavior

**Documentation Debt**: Creates comprehensive, maintained documentation as a core deliverable

**Modernization Risk**: Reduces risk through verification before implementation

**Technical Debt Cycle**: Decouples knowledge from implementation, preventing future legacy lock-in

**Collaboration Barriers**: Provides artifacts that bridge technical and business stakeholders

---

## Comparisons to Other Approaches

### Isn't this just BDD/ATDD for legacy systems?

**Short answer**: No. While related, SpecOps addresses different context with different tools.

**Key differences**:

**Context**: 
- BDD/ATDD: Building new features
- SpecOps: Documenting existing systems

**Specification Source**:
- BDD/ATDD: Stakeholder intent
- SpecOps: Existing code analysis with AI

**AI Role**:
- BDD/ATDD: Optional tool
- SpecOps: Essential enabler

**Primary Goal**:
- BDD/ATDD: Requirement clarity for new development
- SpecOps: Knowledge preservation for modernization

**Temporal Focus**:
- BDD/ATDD: Active development cycle
- SpecOps: Long-term system lifecycle

**Relationship**: SpecOps builds on BDD/ATDD wisdom but adapts it for AI-assisted legacy modernization context.

See [this comparison](https://github.com/mheadd/spec-ops/discussions/3) for more.

---

### Isn't SpecOps just waterfall with AI?

**Short answer**: No. SpecOps is iterative and incremental, not sequential and all-at-once.

**Critical distinctions**:

**Waterfall**: "Tell me everything you want before we build anything"
**SpecOps**: "Let's document what already works, one component at a time"

**Waterfall**: Sequential phases (requirements → design → implementation)
**SpecOps**: Iterative cycles (specify component → implement component → next component)

**Waterfall**: All requirements upfront
**SpecOps**: Incremental specification of prioritized components

**Waterfall**: Change is failure
**SpecOps**: Refinement is expected

**Waterfall**: Big bang at end
**SpecOps**: Continuous value delivery

**Test**: Are you deploying components within 3-6 months? Can you specify one component while implementing another? Are specifications evolving based on learning? If yes, you're not doing waterfall.

See [detailed response](https://github.com/mheadd/spec-ops/discussions/2) for more.

---

### Can't I just use BDD/TDD to describe my existing system?

**Short answer**: Absolutely you can—and should. SpecOps makes this practical at scale and adds a domain expert verification layer.

**Agreement**: Test coverage is critical. Refactoring without tests is risky. BDD/TDD are valuable for existing systems.

**What SpecOps adds**:

**AI-Assisted Scale**: Makes comprehensive coverage practical for 100K+ line legacy systems that would take years to document manually

**Domain Expert Verification**: Natural language specifications that policy experts can verify, even if they can't write or review Gherkin/tests

**Knowledge Preservation**: Captures "why" behind rules, not just behavior. Historical context, policy rationale, edge case explanations

**Replace vs. Refactor**: Addresses the "rebuilding in different stack" scenario where legacy tests don't port

**Think of it as**: SpecOps = BDD/TDD + AI assistance + domain expert verification + long-term knowledge preservation

All compatible. All serving the same goal: making modernization less risky through specifications and tests.

---

### How is this different from direct AI code translation?

**Direct Translation (Transpilation)**:
- COBOL → Java automatically
- Fast but risky
- No human verification of logic
- No knowledge preservation
- Errors embedded in new code
- Modern code becomes new legacy

**SpecOps (Compilation)**:
- COBOL → Specification → Modern Code
- Slower but verified
- Domain expert verification checkpoint
- Knowledge preserved in specifications
- Errors caught during specification review
- Specifications outlast implementations

**Key difference**: Transpilation treats code as the valuable output. SpecOps treats specifications as the valuable output, with code as implementation.

See [Comparison Framework](public/COMPARISON.md) for detailed analysis.

---

### What about other specification approaches like Formal Methods?

**Formal Methods** (Z, Alloy, TLA+, etc.) are excellent for critical systems requiring mathematical proof of correctness.

**How SpecOps differs**:

**Accessibility**: SpecOps uses natural language that domain experts can read. Formal methods require mathematical expertise.

**Purpose**: SpecOps preserves institutional knowledge. Formal methods prove correctness properties.

**Scope**: SpecOps documents entire system behavior. Formal methods typically focus on critical algorithms.

**Verification**: SpecOps uses human domain expert review. Formal methods use automated proof checkers.

**Not mutually exclusive**: You could use formal methods for critical components within a SpecOps framework. SpecOps specifications could feed formal specification development where needed.

**Trade-off**: Formal methods offer stronger guarantees but higher expertise requirements. SpecOps offers broader applicability with more accessible verification.

---

## Getting Started

### Do I need to specify everything before I can start implementing?

**No.** This is a critical misunderstanding.

**SpecOps approach**:
1. Prioritize components by value and risk
2. Specify *one component*
3. Verify that component's specification
4. Implement that component
5. Deploy that component
6. Move to next component

**You're specifying incrementally**, not comprehensively upfront.

**Parallel work**: While implementing component A, you can be specifying component B and verifying component C.

**Minimum to start**: 
- Specification for ONE prioritized component
- Verification of that specification
- That's it—you can implement and deploy

This is fundamentally different from "specify everything before anything."

---

### What if I don't have domain experts available?

**This is challenging but manageable**:

**Still proceed with specification generation**:
- Generate specifications even without immediate verification
- Document current understanding of system
- Flag uncertainties explicitly
- Create artifact that can be verified when experts become available

**Seek alternatives**:
- Retired employees as consultants
- Users of the system who understand behavior
- Documentation and training materials
- Policy documents and regulations
- Other agencies with similar systems

**Verify indirectly**:
- Test specifications against legacy system behavior
- Compare with documented policies
- Validate with users in UAT

**Accept limitations**:
- Some specifications may be "best effort"
- Document confidence levels
- Focus on most critical components first

**The key**: Unverified specifications are still more valuable than no specifications. They create an artifact that can be improved over time.

---

### What tools do I need to get started?

**Minimum viable toolchain**:

1. **Git repository** for specifications (GitHub, GitLab, etc.)
2. **AI coding agent** (Claude, GitHub Copilot, Cursor, etc.)
3. **Basic instruction sets** for your legacy platform (start simple, refine)
4. **Markdown editor** for specifications
5. **Pull request workflow** for reviews

**That's it to start.**

**As you mature, add**:
- More sophisticated instruction sets
- Automated validation tools
- Testing infrastructure
- CI/CD pipelines
- Documentation sites

**Don't wait for perfect tooling. Start with what you have.**

See [Core Tools](public/CORE-TOOLS.md) for detailed guidance.

---

### How long does it take to see results?

**Realistic timeline for pilot component** (moderate complexity):

- **Month 1**: Discovery, prioritization, tool setup
- **Month 2**: Specification generation and technical review
- **Month 3**: Domain expert verification
- **Month 4**: Implementation begins
- **Month 5**: Testing
- **Month 6**: Deployment

**First value delivery: 3-6 months** for pilot component.

**Compare to**:
- Traditional manual approach: 6-12 months for same component
- Direct AI translation: 1-2 months but higher risk of errors
- Big bang replacement: Years with no value until end

**Subsequent components are faster** as you:
- Refine instruction sets
- Build specification patterns
- Improve team capability
- Reuse modern implementation patterns

---

### Can I use SpecOps on just part of my legacy system?

**Absolutely.** In fact, this is recommended.

**Start with**:
- Highest-value component
- Moderate complexity (not too simple, not too hard)
- Good domain expert availability
- Clear boundaries with rest of system

**Expand incrementally**:
- Prove value on one component
- Learn and refine approach
- Gradually expand to more components
- Build library of specifications

**Hybrid approaches work**:
- SpecOps for complex, poorly-documented components
- Direct translation for well-understood, simple components
- Manual development for new features
- Different strategies for different parts of system

**You don't need to commit to SpecOps for everything to get value.**

---

## AI and Technology

### What if AI generates incorrect specifications?

**This is exactly why domain expert verification is critical.**

**Built-in safeguards**:

1. **AI-generated specifications are drafts**: Never treated as final without review
2. **Technical review first**: Engineers check for obvious misunderstandings
3. **Domain expert verification**: Policy experts review for correctness
4. **Explicit uncertainty documentation**: AI flags areas where it's unsure
5. **Multiple verification methods**: Compare to policy, test against legacy system, validate with users

**Common AI errors**:
- Misunderstanding complex logic
- Missing edge cases
- Incorrect assumptions about data
- Confusing technical implementation with business intent

**How we catch them**:
- Domain experts recognize business logic errors
- Engineers spot technical misunderstandings
- Testing reveals implementation mismatches
- Users identify incorrect behavior

**The key**: Treat AI output as "best first draft" requiring human verification, not as final truth.

---

### Which AI coding tools work with SpecOps?

**SpecOps is tool-agnostic.** Any AI coding agent can work if it can:
- Analyze legacy code
- Generate text/specifications
- Follow custom instructions
- Generate modern code

**Currently effective tools**:
- **Claude** (Anthropic): Strong at specification generation and reasoning
- **GitHub Copilot**: Integrated workflow, widely available
- **Cursor**: AI-native IDE
- **Aider**: Command-line tool
- **ChatGPT** (OpenAI): Accessible, versatile

**Selection criteria**:
- Context window size (can it handle large specs?)
- Instruction following (how well does it use custom skills?)
- Legacy language support
- Modern language proficiency
- Cost and licensing

**Future-proofing**: Use tool-agnostic instruction formats (Markdown AGENTS.md files) so you can switch tools as they evolve.

---

### Do I need AI expertise on my team?

**You need someone comfortable with AI tools, but not AI researchers.**

**Required skills**:
- Prompt engineering (can be learned quickly)
- Critical evaluation of AI output
- Instruction set design (iterative, learnable)
- Understanding AI capabilities and limitations

**Ideal AI Engineering Lead**:
- Software engineering background
- Experimental mindset
- Good technical writing
- Willingness to learn and adapt
- Healthy skepticism about AI output

**Not required**:
- Machine learning expertise
- Deep understanding of LLM architectures
- AI research background

**Most important**: Team-wide comfort with AI tools and willingness to critically evaluate their output.

See [Team Structure](public/TEAM.md) for detailed role descriptions.

---

### What about AI hallucinations?

**AI hallucinations are a real concern—SpecOps addresses them through human verification.**

**Where hallucinations happen**:
- Inventing business rules that don't exist
- Confidently stating incorrect logic
- Making up edge cases
- Fabricating policy references

**How SpecOps catches them**:

1. **Domain expert verification**: Policy experts recognize invented rules
2. **Comparison to legacy system**: Test specifications against actual behavior
3. **Policy document validation**: Cross-reference authoritative sources
4. **Multiple reviewers**: Technical and domain experts both review
5. **Explicit uncertainty**: AI trained to flag when unsure

**The SpecOps advantage**: Hallucinations in specifications (caught by humans) are much less dangerous than hallucinations in code (hidden until production).

**Best practice**: Assume AI will hallucinate, design verification to catch it.

---

### Will SpecOps work with future AI tools?

**Yes—by design.**

**Future-proofing principles**:

**Tool-agnostic instruction formats**: Use standard Markdown, not proprietary formats

**Portable instruction sets**: Knowledge encoded in instructions transfers across tools

**Human-verifiable specifications**: Not dependent on specific AI capabilities

**Standard workflows**: Git-based processes work with any tool

**As AI improves**:
- Specification quality improves
- Less human refinement needed
- More sophisticated analysis possible
- But core methodology remains the same

**The specifications you create today will be valuable regardless of which AI tools exist tomorrow.**

---

## Specifications and Documentation

### How detailed should specifications be?

**Detailed enough to**:
- Enable domain expert verification
- Guide implementation accurately
- Support testing
- Preserve institutional knowledge

**Not so detailed that**:
- They become unreadable
- Maintenance burden is excessive
- They duplicate code-level detail

**Good rule of thumb**:
- Business logic: Very detailed
- Data structures: Moderately detailed
- Technical implementation: Less detailed (code handles this)
- Integration points: Clear but concise
- Edge cases: Explicitly documented

**Format**: 
- Lead with purpose and context
- Include concrete examples
- Document the "why" not just the "what"
- Flag uncertainties

**Different audiences need different levels**:
- Domain experts: Business-focused, less technical
- Engineers: Include technical constraints
- Future maintainers: Include historical context

---

### What format should specifications use?

**Recommended: Markdown**

**Why Markdown**:
- Human-readable as plain text
- Renders nicely in Git platforms
- Supports structure (headers, lists, tables)
- Easy to version control
- No proprietary formats
- Universal tool support

**Organization**:
```markdown
# Component Name

## Overview
[Purpose, context, stakeholders]

## Business Logic
[Rules, calculations, decisions]

## Data Models
[Structures, relationships]

## Examples
[Concrete scenarios]

## Edge Cases
[Exceptions, special handling]

## Uncertainties
[What needs verification]
```

**Alternative formats**:
- **Structured text** (AsciiDoc, reStructuredText)
- **Domain-specific languages** for certain domains
- **Hybrid approaches** (Markdown + diagrams)

**Avoid**: 
- Binary formats (Word docs, PDFs) that don't version well
- Proprietary tools that lock you in
- Overly complex formats that reduce accessibility

---

### How do I keep specifications in sync with code?

**This is the core of SpecOps—specifications are the source of truth, not an afterthought.**

**Key principle**: Changes flow through specifications (like GitOps).

**Process**:
1. Specification change requested
2. Update specification in Git
3. Review and approve specification change
4. Generate/update code based on specification
5. Test against specification
6. Deploy

**Enforced through**:
- Branch protection (specifications must be reviewed)
- CI/CD checks (code must match specifications)
- Change management process
- Team culture and discipline

**This is the reverse of traditional**:
- Traditional: Change code, hopefully update docs
- SpecOps: Change specification, then update code

**Automation helps**:
- Automated checks for specification-code consistency
- CI/CD gates requiring specification updates
- Alerts when code changes without specification updates

**Key**: Make specification updates easy and natural, not burdensome.

---

### What if the legacy system has bugs we want to fix?

**Excellent question—SpecOps handles this.**

**During specification generation**:
1. Document what the legacy system **actually does** (including bugs)
2. Flag known bugs explicitly in specifications
3. Note what **should** happen (policy intent)
4. Document difference between actual and intended behavior

**During verification**:
- Domain experts identify bugs
- Decide: fix in modern implementation or preserve bug (compatibility)
- Document decision rationale

**Example specification**:
```markdown
## Income Calculation Bug (Legacy Behavior)

The legacy system incorrectly rounds income down before 
applying the threshold test. This results in some applicants
being incorrectly determined eligible.

**Legacy behavior**: Round income down to nearest $100, 
then compare to threshold

**Policy intent**: Compare actual income to threshold 
(no rounding)

**Decision for modern implementation**: Fix bug—implement 
per policy intent. Note: This will affect approximately 
50 cases per month that were incorrectly approved.

**Verification**: Policy expert confirmed this was a bug, 
not intended behavior. Legal approved correction.
```

**The key**: Specifications capture both current behavior and intended behavior when they differ, with explicit decisions on which to implement.

---

## Implementation and Process

### Can SpecOps work with agile/scrum?

**Yes—SpecOps is highly compatible with agile.**

**How they fit together**:

**Sprint Planning**: 
- Select component to specify/implement
- Break into user stories
- Prioritize based on value

**Sprint Execution**:
- Specification generation as stories
- Verification as acceptance criteria
- Implementation sprints once spec verified
- Continuous deployment

**Ceremonies**:
- Standups: Discuss specification and implementation progress
- Reviews: Demo both specifications and working code
- Retrospectives: Improve SpecOps process

**Agile principles aligned with SpecOps**:
- ✅ Working software frequently (component by component)
- ✅ Welcome changing requirements (specifications version-controlled)
- ✅ Continuous delivery (incremental deployment)
- ✅ Face-to-face conversation (domain expert verification)
- ✅ Self-organizing teams (flexible roles)
- ✅ Regular reflection and adaptation (retrospectives)

**Not waterfall disguised as agile**: Specifications evolve, components deploy incrementally, feedback is continuous.

---

### How does SpecOps integrate with Strangler Fig?

**SpecOps and Strangler Fig are highly complementary.**

**Strangler Fig Pattern**: Incrementally replace legacy system by building new components alongside old, gradually migrating traffic.

**How SpecOps enhances Strangler Fig**:

1. **Specifications define seams**: Clear component boundaries for incremental replacement
2. **Specifications as integration contracts**: Define how new and old components interact
3. **Verification during coexistence**: Compare new vs old behavior against specification
4. **Knowledge preservation during long transition**: Specifications document system while modernization proceeds
5. **Clear success criteria**: New component matches specification = ready to migrate traffic

**Process integration**:
1. Generate specification for component
2. Verify specification
3. Build modern component from specification
4. Deploy alongside legacy (Strangler Fig)
5. Route some traffic to new component
6. Validate against specification
7. Gradually increase traffic
8. Retire legacy component when new component fully validated

**SpecOps provides the specification layer that makes Strangler Fig more reliable and verifiable.**

See [Methodology](public/METHODOLOGY.md) for detailed integration guidance.

---

### What about incremental deployment?

**Incremental deployment is core to SpecOps.**

**Deployment strategy**:
- Deploy components as they're verified and implemented
- Don't wait for entire system modernization
- Use Strangler Fig for gradual traffic migration
- Maintain coexistence during validation

**Benefits**:
- Earlier value delivery
- Reduced risk (small changes, not big bang)
- Faster feedback
- Ability to course-correct
- Users see improvements incrementally

**Enabled by**:
- Component-by-component approach
- Clear specifications defining boundaries
- Transitional architecture for coexistence
- Comprehensive testing

**Timeline example**:
- Month 6: First component deployed
- Month 12: Second component deployed
- Month 18: Third component deployed
- Continue until complete

**Not**: Years of work then single massive deployment.

---

### How do I handle changing requirements?

**SpecOps is designed for change.**

**Change process**:
1. Propose change to specification
2. Create pull request in Git
3. Review and discuss change
4. Approve specification update
5. Update code based on new specification
6. Test against updated specification
7. Deploy

**Version control provides**:
- Clear history of what changed and why
- Ability to review before implementation
- Traceability from specification to code
- Rollback capability if needed

**Types of changes**:

**Policy changes**: 
- Update specification first
- Domain expert verifies
- Implement in code

**Bug fixes**: 
- Document bug in specification
- Specify correct behavior
- Implement fix

**New features**: 
- Add to specification
- Verify with stakeholders
- Implement

**The key**: Changes flow through specifications (source of truth), not around them.

**Compare to traditional**: Code changes hopefully documented later (often isn't).

---

## Team and Organization

### How big does my team need to be?

**Minimum viable team: 8-10 people**
- 1 Program Manager
- 1 Technical Lead (may double as AI Engineering Lead)
- 2-3 Software Engineers
- 1 QA Engineer
- 1 Lead Domain Expert
- 1-2 Domain Specialists
- 1 Business Analyst

**Recommended team: 12-18 people**
- Separates Technical Lead and AI Engineering Lead
- More engineers for parallel work
- Additional QA capacity
- More domain specialists for breadth
- Dedicated DevOps

**Scale varies by**:
- System size and complexity
- Timeline requirements
- Domain expert availability
- Budget constraints

**Start small**: Pilot with minimum team, expand as you prove value.

See [Team Structure](public/TEAM.md) for detailed roles and staffing.

---

### Do I need people who know the legacy language?

**Helpful but not required—this is one of SpecOps' key advantages.**

**Traditional approach**: Must have COBOL/RPG experts who can read and understand legacy code.

**SpecOps approach**: AI handles much of the legacy code analysis.

**Ideal team mix**:
- Some engineers with legacy platform familiarity (helpful for AI instruction design)
- Engineers strong in modern technologies (for implementation)
- Domain experts (more important than legacy language expertise)
- AI proficiency (most critical new skill)

**If you have legacy language experts**: 
- Use them to validate AI-generated specifications
- Have them design instruction sets
- Leverage their knowledge while you have it

**If you don't**:
- AI can analyze legacy code
- Focus on domain expert verification
- Build capability in modern stack
- Consider retired experts as consultants for instruction set design

**The shift**: From "need rare COBOL experts" to "need domain experts + AI-skilled engineers."

---

### How do I get executive buy-in?

**Key messages for leadership**:

**Risk reduction**: 
- Domain expert verification catches errors before implementation
- Incremental approach reduces big bang failure risk
- Specifications provide audit trail and accountability

**Knowledge preservation**: 
- Captures institutional knowledge before retirements
- Creates lasting asset beyond code
- Reduces future modernization risk

**Value delivery**: 
- Components deployed within months, not years
- Early ROI, not all at end
- Can demonstrate progress continuously

**Cost management**: 
- Prevents "new legacy" problem
- Reduces long-term maintenance cost
- Enables future modernizations more easily

**Competitive advantage**: 
- AI-assisted approach is faster than pure manual
- More reliable than direct translation
- Proven patterns (GitOps, Strangler Fig)

**Start with pilot**: 
- Low commitment, proves value
- Demonstrates approach on real component
- Builds confidence for larger investment

**Address concerns**:
- "It sounds like waterfall" → Explain incremental approach
- "We need to move faster" → Show risk of speed without verification
- "Why not direct translation?" → Explain knowledge preservation value

---

### Can contractors do this or does it require government staff?

**Hybrid approach works best.**

**Government staff should**:
- Program Manager (continuity, institutional knowledge)
- Product Owner (represents users, makes priorities)
- Lead Domain Expert (knows policy, stays after project)
- Some core engineers (build government capability)

**Contractors can**:
- AI Engineering Lead (specialized skill)
- Additional software engineers (scale up/down)
- QA specialists (specialized testing)
- Technical architecture (expertise)

**Why hybrid**:
- Contractors bring specialized skills
- Government staff ensure continuity
- Knowledge transfer throughout project
- Core capabilities remain with government

**Knowledge transfer is critical**:
- Specifications stay with government (that's the point)
- Instruction sets shared openly
- Document everything
- Pair government staff with contractors
- Build government capability over time

**Risk of contractor-only**: Knowledge walks out door when contract ends.

**Risk of government-only**: May lack specialized AI skills initially.

---

## Collaboration and Sharing

### Can we share instruction sets with other agencies?

**Yes! This is strongly encouraged.**

**What makes instruction sets shareable**:
- Technical patterns (COBOL, mainframes) are universal
- No proprietary business logic in instructions
- No sensitive data
- Just knowledge about platforms and patterns

**Benefits of sharing**:
- Reduce duplicated effort across agencies
- Pool resources for better instruction sets
- Learn from each other's experience
- Build community capability

**How to share**:
- Publish to GitHub with permissive license
- Contribute to SpecOps community repository
- Present at conferences and user groups
- Collaborate on instruction development

**What can be shared freely**:
- Legacy platform comprehension skills (COBOL, DB2, etc.)
- Specification structure guidance
- Modern implementation patterns
- Testing approaches
- General domain patterns (benefits, tax concepts)

**What should stay internal**:
- Specific business rules for your programs
- Sensitive system architecture details
- Security-specific implementations
- Vendor-specific integrations

---

### What can be shared vs. what must stay internal?

**Highly Shareable (Publish Openly)**:
- COBOL comprehension instruction sets
- Mainframe environment skills
- Specification structure standards
- Plain language writing guidance
- Testing and validation patterns
- Government compliance frameworks (508, FISMA)
- General domain concepts

**Moderately Shareable (With Other Agencies)**:
- Specific domain patterns (SNAP eligibility patterns)
- State program variations
- Implementation approaches
- Lessons learned and challenges
- Tool configurations

**Keep Internal**:
- Specific business rules for your programs
- Sensitive system architecture
- Security implementations
- Vendor-specific integration details
- Proprietary calculations
- Personal information or data

**Rule of thumb**: If it's knowledge about platforms, languages, or general patterns—share it. If it's specific to your agency's programs or systems—keep it internal.

**When in doubt**: 
- Consult legal/security teams
- Generalize before sharing
- Err on side of sharing (most things can be)

---

### How do I contribute to the SpecOps community?

**Ways to contribute**:

**Instruction Sets**:
- Develop skills for legacy platforms
- Share effective prompting patterns
- Test and validate existing instructions
- Submit improvements via pull requests

**Experience Reports**:
- Blog about your SpecOps journey
- Present at conferences
- Share lessons learned
- Document challenges and solutions

**Documentation**:
- Improve SpecOps methodology docs
- Create tutorials and guides
- Translate for accessibility
- Add examples and use cases

**Tools and Templates**:
- Specification templates
- Workflow automation
- Validation tools
- Reusable patterns

**Community Support**:
- Answer questions in discussions
- Review pull requests
- Mentor other agencies
- Organize user groups

**Where to contribute**:
- GitHub repository (code, docs, instructions)
- Community discussions
- User groups and conferences
- Blog posts and articles

**No contribution too small**: Even fixing typos or asking good questions helps the community.

---

## Success and Measurement

### How do I measure success?

**Knowledge Preservation Metrics**:
- % of legacy system documented in specifications
- Number of domain expert insights captured
- Reduction in "only one person knows this" scenarios
- Specification verification completion rate

**Quality Metrics**:
- Specification accuracy (verified by domain experts)
- Defect rates in modernized components
- Test coverage from specifications
- Discrepancies found during verification

**Delivery Metrics**:
- Time from legacy analysis to production deployment
- Number of components modernized
- Value delivered per quarter
- Cost per component vs. traditional approaches

**Efficiency Metrics**:
- AI-assisted vs. manual specification time
- Revision cycles needed for specifications
- Team productivity improvements
- Reuse of instruction sets

**Sustainability Metrics**:
- Time to onboard new developers
- Maintenance burden reduction
- Ease of making changes
- Quality of knowledge transfer

**Compare to baseline**: Measure against traditional modernization approaches in your organization.

---

### What are the biggest risks?

**Top risks and mitigations**:

**1. Domain experts unavailable**
- *Mitigation*: Seek alternatives (retired experts, users, policy docs), proceed with "best effort" specifications, document confidence levels

**2. AI generates poor specifications**
- *Mitigation*: Technical review before domain review, multiple verification methods, explicit uncertainty documentation

**3. Specifications drift from code**
- *Mitigation*: Make specifications source of truth, enforce workflow, automate checks, build culture

**4. Perfectionism prevents progress**
- *Mitigation*: Set "good enough" standards, iterate, deliver incrementally, embrace refinement

**5. Team lacks necessary skills**
- *Mitigation*: Training, start simple and build capability, bring in expertise temporarily, learn by doing

**6. Executive support wavers**
- *Mitigation*: Demonstrate value early, communicate continuously, show incremental progress, manage expectations

**7. Specifications become too detailed/technical**
- *Mitigation*: Keep audience in mind, test readability with domain experts, balance detail vs. accessibility

**8. Treating this like waterfall**
- *Mitigation*: Enforce incremental approach, deploy early and often, embrace change, avoid all-or-nothing thinking

---

### What could cause SpecOps to fail?

**Anti-patterns that lead to failure**:

❌ **Trying to specify everything upfront** (acting like waterfall)
❌ **Skipping domain expert verification** (defeats the purpose)
❌ **Treating specifications as nice-to-have** (not source of truth)
❌ **Accepting poor AI output without critical review** (garbage in, garbage out)
❌ **Not adapting approach to your context** (one size doesn't fit all)
❌ **Inadequate tooling or infrastructure** (can't execute properly)
❌ **Poor communication between technical and domain experts** (breaks verification)
❌ **Perfectionism preventing deployment** (never ship)
❌ **Ignoring lessons learned** (not improving process)
❌ **Lack of executive support** (resources and priority)

**Success requires**:
- Iterative approach
- Domain expert engagement
- Critical AI evaluation
- Proper tooling
- Good communication
- Continuous improvement
- Organizational support

---

### Is there a reference implementation I can study?

**Status**: Under development

The SpecOps reference implementation will provide:
- Complete example of methodology applied to real legacy system
- Reusable artifacts (specifications, instruction sets, templates)
- Lessons learned and best practices
- Training materials

**Planned timeline**: 
- Q2-Q4 2026: Development
- Q1 2027: Public release

**Current resources**:
- Complete methodology documentation
- Instruction set examples
- Team structure guidance
- Comparison frameworks

**Stay informed**:
- Watch the GitHub repository
- Join community discussions
- Subscribe to updates

See [Reference Implementation](public/REFERENCE-IMPLEMENTATION.md) for details on planned scope and timeline.

---

## Still Have Questions?

**Join the conversation**:
- GitHub Discussions: https://github.com/mheadd/spec-ops/discussions

**Contribute**:
- Open issues for questions
- Suggest FAQ additions
- Share your experiences
- Help answer others' questions

**The community grows through shared knowledge and collaboration.**

---

*This FAQ is a living document. Contributions and improvements welcome via pull request.*