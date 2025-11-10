# SpecOps Team Structure and Staffing
## Building the Right Team for Specification-Driven Legacy Modernization

---

## Introduction

Successfully executing a SpecOps modernization requires a team with diverse skills spanning legacy systems knowledge, modern development practices, domain expertise, and AI tool proficiency. This document outlines the team structure for a moderate-sized legacy system modernization project and describes the responsibilities, skills, and time commitments for each role.

**What is a "moderate-sized" project?**
For the purposes of this document, we're assuming:
- Legacy system with 100K-500K lines of code
- 5-10 major functional areas
- 3-5 year modernization timeline
- Business-critical system requiring careful migration
- Active user base that cannot tolerate extended downtime

---

## Core Team Structure

A typical SpecOps team is organized around three primary functions: **Leadership & Coordination**, **Technical Delivery**, and **Domain Expertise & Verification**. The size and composition will vary based on project scope, but this structure provides a starting point.

```
SpecOps Team Structure
│
├── Leadership & Coordination
│   ├── Program Manager / SpecOps Lead
│   └── Product Owner
│
├── Technical Delivery
│   ├── Technical Lead / Architect
│   ├── AI Engineering Lead
│   ├── Software Engineers (3-5)
│   ├── QA/Test Engineers (2-3)
│   └── DevOps Engineer
│
└── Domain Expertise & Verification
    ├── Lead Domain Expert
    ├── Domain Specialists (2-4)
    └── Business Analyst / Technical Writer
```

**Total Core Team Size: 12-18 people** (with varying levels of time commitment)

---

## Leadership & Coordination

### Program Manager / SpecOps Lead

**Primary Responsibilities**:
- Overall accountability for modernization success
- Coordinate across technical, business, and leadership stakeholders
- Manage project timeline, budget, and resources
- Remove blockers and resolve issues
- Report progress to executive leadership
- Ensure alignment with organizational goals
- Manage risks and dependencies

**Key Skills**:
- Program/project management experience
- Understanding of legacy modernization challenges
- Ability to bridge technical and business conversations
- Stakeholder management and communication
- Risk management
- Budget and resource planning

**Time Commitment**: Full-time (100%)

**Background**: Ideally someone with both technical background and strong program management skills. Experience with government IT modernization projects is valuable. Should understand both waterfall and agile approaches since legacy organizations often have elements of both.

**Success Metrics**:
- Project on schedule and within budget
- Stakeholder satisfaction
- Risk mitigation effectiveness
- Team morale and productivity

---

### Product Owner

**Primary Responsibilities**:
- Define and prioritize what gets modernized and when
- Represent user and business needs
- Make trade-off decisions between competing priorities
- Accept completed work as meeting requirements
- Ensure modernization delivers business value
- Bridge between domain experts and technical team

**Key Skills**:
- Deep understanding of the business domain
- Product management experience
- User-centered thinking
- Decision-making under uncertainty
- Understanding of technical constraints
- Stakeholder communication

**Time Commitment**: Full-time (100%) or near full-time (80%+)

**Background**: Should have significant experience with the legacy system and its business context. Needs to understand both how the system works today and what the organization needs going forward. Must have credibility with both business stakeholders and technical team.

**Success Metrics**:
- Business value delivered by modernized components
- User satisfaction with new implementations
- Alignment between technical delivery and business needs
- Quality of prioritization decisions

---

## Technical Delivery

### Technical Lead / Architect

**Primary Responsibilities**:
- Design modern system architecture
- Make technology stack decisions
- Establish technical standards and patterns
- Review specifications for technical accuracy
- Review generated and written code for quality
- Mentor software engineers
- Design transitional architecture for Strangler Fig approach
- Ensure technical debt is managed

**Key Skills**:
- Strong architecture and design skills
- Experience with modern development practices
- Understanding of legacy system constraints
- Knowledge of both legacy and modern technology stacks
- Code review and quality assurance
- Technical mentorship
- Clear technical communication

**Time Commitment**: Full-time (100%)

**Background**: Senior engineer with broad technical experience. Should understand both legacy and modern technologies. Experience with incremental modernization approaches. Strong enough technically to command respect of engineers while able to communicate with non-technical stakeholders.

**Success Metrics**:
- Architecture quality and sustainability
- Technical decision outcomes
- Team technical capability growth
- Code quality metrics
- System performance and reliability

---

### AI Engineering Lead

**Primary Responsibilities**:
- Design and maintain AI agent instruction sets
- Configure AI tools for specification generation and code generation
- Develop custom skills for legacy code comprehension
- Optimize AI agent performance and accuracy
- Train team on effective AI tool usage
- Evaluate and select AI coding tools
- Monitor AI-generated output quality
- Research and adopt new AI capabilities

**Key Skills**:
- Proficiency with AI coding agents (Claude, Copilot, Cursor, etc.)
- Prompt engineering and instruction design
- Understanding of LLM capabilities and limitations
- Software engineering background
- Ability to teach others to use AI tools effectively
- Critical evaluation of AI-generated content

**Time Commitment**: Full-time (100%)

**Background**: This is a relatively new role. Ideal candidate has software engineering experience and has become proficient with AI coding tools. Should be experimental and willing to push the boundaries of what AI can do while maintaining healthy skepticism about AI output. Strong technical writing skills for creating instruction sets.

**Success Metrics**:
- Quality of AI-generated specifications
- Accuracy of AI-generated code
- Team proficiency with AI tools
- Reduction in manual effort through AI assistance
- Quality of instruction set library

---

### Software Engineers (3-5)

**Primary Responsibilities**:
- Operate AI agents to generate specifications from legacy code
- Review and refine AI-generated specifications
- Use AI agents to generate modern code from specifications
- Review and refine AI-generated code
- Write additional code as needed
- Develop automated tests
- Review code from other engineers
- Participate in specification verification process

**Key Skills**:
- Software development proficiency
- Ability to work effectively with AI coding tools
- Code review skills
- Testing expertise
- Understanding of legacy programming languages (helpful but not required)
- Proficiency in modern technology stack
- Critical thinking about AI-generated content

**Time Commitment**: Full-time (100%) each

**Background**: Mix of experience levels works well. Some engineers should have familiarity with legacy languages/platforms, but this is less critical in SpecOps than traditional approaches since AI handles much of the legacy code comprehension. More important is ability to effectively prompt and guide AI agents and critically evaluate their output.

**Team Composition**:
- 1-2 engineers with legacy system knowledge
- 2-3 engineers strong in modern technologies
- At least 1 engineer with testing specialization

**Success Metrics**:
- Velocity of specification generation
- Quality of generated specifications
- Code quality and test coverage
- Effective use of AI tools
- Collaboration effectiveness

---

### QA/Test Engineers (2-3)

**Primary Responsibilities**:
- Design comprehensive test strategy
- Create test cases from specifications
- Develop automated test suites
- Execute specification conformance testing
- Perform legacy vs. modern system comparison testing
- Coordinate user acceptance testing
- Track and report quality metrics
- Validate that implementations match specifications

**Key Skills**:
- Test design and execution
- Test automation expertise
- Specification-based testing
- Understanding of both legacy and modern systems
- Data analysis for comparison testing
- Bug tracking and reporting
- Attention to detail

**Time Commitment**: Full-time (100%) each

**Background**: QA engineers with experience in regression testing and system comparison. Ability to design tests from specifications rather than just from existing system behavior. Experience with automated testing frameworks. Understanding that in SpecOps, the specification is the test oracle, not the legacy system.

**Team Composition**:
- 1 test lead / strategy designer
- 1-2 test automation engineers

**Success Metrics**:
- Test coverage completeness
- Defect detection rate
- Specification conformance validation
- Test automation effectiveness
- Quality of comparison analysis

---

### DevOps Engineer

**Primary Responsibilities**:
- Maintain SpecOps toolchain infrastructure
- Manage specification repository and workflows
- Configure CI/CD pipelines
- Automate specification validation processes
- Set up and maintain test environments
- Design and implement transitional architecture
- Monitor system health and performance
- Manage deployments

**Key Skills**:
- DevOps and infrastructure automation
- CI/CD pipeline design and maintenance
- Git and version control systems
- Cloud infrastructure management
- Monitoring and observability
- Automation scripting
- Security best practices

**Time Commitment**: Full-time (100%)

**Background**: Experienced DevOps engineer who understands both legacy and modern deployment practices. Needs to design transitional architecture that allows legacy and modern systems to coexist. Should be comfortable with government security and compliance requirements if applicable.

**Success Metrics**:
- Infrastructure reliability
- Deployment success rate
- Automation coverage
- Tool performance and availability
- Security compliance

---

## Domain Expertise & Verification

### Lead Domain Expert

**Primary Responsibilities**:
- Lead specification verification process
- Coordinate other domain specialists
- Make final decisions on specification accuracy
- Provide authoritative interpretation of business rules
- Escalate complex policy questions
- Train other domain experts on specification review
- Represent domain expertise to technical team and leadership

**Key Skills**:
- Deep expertise in business domain
- Understanding of policy and regulatory requirements
- Ability to read and evaluate technical specifications
- Decision-making authority
- Clear communication with both technical and business audiences
- Understanding of how legacy system implements business rules

**Time Commitment**: 50-75% dedicated to SpecOps project

**Background**: Senior expert with comprehensive knowledge of the system and business domain. Likely someone who has worked with the legacy system for many years and understands not just what it does but why. Should have institutional knowledge of edge cases and historical policy decisions. Needs respect and trust from other domain experts.

**Success Metrics**:
- Specification accuracy and completeness
- Verification thoroughness
- Domain expert team effectiveness
- Quality of business rule documentation
- Stakeholder confidence in specifications

---

### Domain Specialists (2-4)

**Primary Responsibilities**:
- Review specifications in their areas of expertise
- Verify accuracy of business rules and logic
- Provide examples and test cases
- Clarify ambiguities in specifications
- Document rationale for business rules
- Participate in UAT
- Serve as subject matter experts for their domains

**Key Skills**:
- Expertise in specific functional areas
- Understanding of relevant policies and regulations
- Ability to read technical specifications
- Attention to detail
- Collaborative problem-solving
- Documentation skills

**Time Commitment**: 25-50% each (varies based on phase of project)

**Background**: Specialists should cover the major functional areas of the legacy system. They might be policy analysts, program managers, operations staff, or others who deeply understand how the system works in their domains. Don't need to be technical but must be willing to learn to read specifications.

**Functional Coverage Example** (for a benefits system):
- Eligibility determination specialist
- Benefits calculation specialist
- Appeals and exceptions specialist
- Data and reporting specialist

**Success Metrics**:
- Coverage of specification reviews in their domain
- Quality of feedback provided
- Identification of specification errors
- Contribution to institutional knowledge capture

---

### Business Analyst / Technical Writer

**Primary Responsibilities**:
- Help structure and organize specifications
- Translate between technical and business language
- Interview domain experts to extract knowledge
- Document business processes and rules
- Maintain glossaries and terminology standards
- Ensure specifications are clear and accessible
- Support verification process

**Key Skills**:
- Technical writing
- Business analysis
- Interviewing and knowledge elicitation
- Information architecture
- Plain language writing
- Understanding of both technical and business domains
- Documentation tools proficiency

**Time Commitment**: Full-time (100%)

**Background**: Experienced business analyst or technical writer who can bridge technical and business worlds. Should be comfortable working with both engineers and domain experts. Strong writing skills and ability to take complex information and make it clear and accessible. Experience with government systems and compliance documentation is valuable.

**Success Metrics**:
- Specification clarity and readability
- Consistency across specifications
- Quality of business process documentation
- Glossary completeness and accuracy
- Domain expert satisfaction with specifications

---

## Extended Team & Specialized Roles

Beyond the core team, several other roles may be needed on a part-time or as-needed basis:

### Legacy System Expert
**Role**: Provides deep technical knowledge of legacy system
**Time**: 10-25% or on-call consulting
**Value**: Helps interpret obscure legacy code patterns, explains historical decisions, clarifies undocumented behavior

### Security Engineer
**Role**: Ensures security requirements are met
**Time**: 10-20%
**Value**: Reviews specifications for security implications, validates modern implementations, ensures compliance with security policies

### Compliance Specialist
**Role**: Ensures regulatory compliance
**Time**: 5-15%
**Value**: Reviews specifications against regulatory requirements, validates compliance in modern implementations

### User Experience Designer
**Role**: Designs user interfaces for modernized components
**Time**: 25-50%
**Value**: Improves user experience during modernization, designs new interfaces that may not have existed in legacy system

### Data Engineer
**Role**: Manages data migration and integration
**Time**: 25-50%
**Value**: Designs data migration strategies, ensures data quality, handles complex data transformations

### Executive Sponsor
**Role**: Provides organizational support and removes institutional barriers
**Time**: 5-10%
**Value**: Champions the project with leadership, secures resources, makes strategic decisions

---

## Team Staffing Patterns Over Project Lifecycle

The team composition and time commitments shift as the project progresses through phases:

### Discovery Phase (Months 1-3)
**Heavy involvement**:
- Program Manager (full-time)
- Technical Lead (full-time)
- Lead Domain Expert (75%)
- Business Analyst (full-time)
- Legacy System Expert (50%)

**Moderate involvement**:
- Product Owner (50%)
- AI Engineering Lead (75%)
- Software Engineers (50% - learning and setup)

**Light involvement**:
- QA Engineers (25% - planning)
- Domain Specialists (as needed for interviews)

### Specification Generation Phase (Ongoing)
**Heavy involvement**:
- AI Engineering Lead (full-time)
- Software Engineers (full-time)
- Business Analyst (full-time)
- Technical Lead (full-time)

**Moderate involvement**:
- Lead Domain Expert (50%)
- QA Engineers (50%)
- Legacy System Expert (25%)

### Specification Verification Phase (Ongoing)
**Heavy involvement**:
- Lead Domain Expert (75%)
- Domain Specialists (50-75% each)
- Business Analyst (full-time)

**Moderate involvement**:
- Software Engineers (50% - responding to questions)
- Product Owner (50%)

### Implementation Phase (Ongoing)
**Heavy involvement**:
- Software Engineers (full-time)
- AI Engineering Lead (full-time)
- QA Engineers (full-time)
- DevOps Engineer (full-time)
- Technical Lead (full-time)

**Moderate involvement**:
- Domain Specialists (25% - UAT support)

### Deployment Phase (Periodic)
**Heavy involvement**:
- DevOps Engineer (full-time during deployment)
- Program Manager (full-time)
- Technical Lead (full-time)
- QA Engineers (full-time)

**Moderate involvement**:
- All other roles as needed for deployment support

---

## Staffing Strategies

### For Government Agencies

**Mix of Staff and Contractors**:
- **Core government staff**: Program Manager, Product Owner, Lead Domain Expert should be government employees for continuity and institutional knowledge
- **Contractor support**: Technical roles, AI Engineering Lead, and some engineers can be contractors for specialized skills and scaling flexibility
- **Domain experts**: Mix of government staff (who know the system) and contractors (who bring fresh perspective)

**Knowledge Transfer Requirements**:
- Plan for contractor knowledge transfer to government staff
- Document everything in specifications and process guides
- Pair government staff with contractors throughout
- Ensure core capabilities remain with government

### For Budget-Constrained Organizations

**Minimum Viable Team** (8-10 people):
- Program Manager (full-time)
- Technical Lead doubling as AI Engineering Lead (full-time)
- 2-3 Software Engineers (full-time)
- 1 QA Engineer (full-time)
- Lead Domain Expert (50%)
- 1-2 Domain Specialists (25% each)
- Business Analyst / Technical Writer (full-time)
- DevOps (25% or shared with other projects)

**Trade-offs**:
- Longer timeline
- Technical Lead must wear multiple hats
- Fewer domain specialists means more serial verification
- Less specialization in AI engineering and DevOps

### For Organizations With Strong Legacy Expertise

If you have engineers who know the legacy system well:
- Leverage them in software engineer roles
- They can help validate AI-generated specifications
- Their expertise makes legacy code analysis faster
- But ensure they're also learning modern technologies

### For Organizations With Limited Domain Expertise

If domain experts are scarce or retiring:
- **Priority 1**: Get specifications generated and verified quickly before knowledge is lost
- Consider bringing back retired experts as consultants
- Record interviews and working sessions
- Accept "best effort" verification on some components
- Document uncertainties explicitly

---

## Skills Development and Training

### Training Needs for the Team

#### For Technical Staff:
- AI coding agent proficiency (prompt engineering, instruction design)
- SpecOps methodology and workflows
- Specification writing and review
- Modern technology stack (if different from current skills)
- Legacy system comprehension techniques

#### For Domain Experts:
- How to read and evaluate technical specifications
- SpecOps verification process
- Collaboration with technical team
- Modern system capabilities and constraints

#### For Entire Team:
- SpecOps principles and methodology
- Strangler Fig modernization approach
- Communication and collaboration practices
- Git and specification repository workflows

### Ongoing Learning

- Regular retrospectives to improve processes
- Sharing lessons learned across iterations
- Staying current with AI tool capabilities
- Building institutional knowledge of SpecOps practices

---

## Team Success Factors

### What Makes a SpecOps Team Effective

**Trust Between Technical and Domain Experts**:
- Domain experts trust engineers to create accurate specifications
- Engineers trust domain experts to verify correctly
- Shared understanding that both expertise types are essential

**Effective Use of AI Tools**:
- Team comfortable with AI capabilities and limitations
- Critical evaluation of AI-generated content
- Continuous improvement of instruction sets
- Sharing AI prompting techniques

**Clear Communication**:
- Regular standups and planning sessions
- Transparent about challenges and blockers
- Documentation of decisions and rationale
- Open feedback culture

**Iterative Mindset**:
- Acceptance that specifications will be refined
- Willingness to learn and adapt
- Celebrating incremental progress
- Managing perfectionism

**Stakeholder Engagement**:
- Regular updates to leadership and stakeholders
- Early and frequent demos
- Managing expectations
- Building confidence through delivered value

---

## Recruiting and Team Assembly

### Key Recruiting Criteria

**For Technical Roles**:
- Look for adaptability over specific technology expertise
- AI tool proficiency is learnable but valuable
- Critical thinking about technology solutions
- Collaborative working style
- Willingness to work closely with non-technical experts

**For Domain Expert Roles**:
- Deep knowledge of business domain
- Willingness to learn new review processes
- Patient teaching of domain knowledge
- Detailed understanding of edge cases
- Credibility with stakeholders

**For Leadership Roles**:
- Experience with complex modernization projects
- Stakeholder management skills
- Technical literacy (not necessarily expertise)
- Change management capabilities
- Results-oriented mindset

### Red Flags to Avoid

- Technical staff who dismiss domain expert input
- Domain experts who won't engage with technical artifacts
- Leadership that wants "silver bullet" solutions
- Team members resistant to using AI tools
- Anyone who can't work collaboratively
- Perfectionism that prevents progress

---

## Conclusion

Building an effective SpecOps team requires balancing technical capability with deep domain knowledge, and fostering collaboration between these different types of expertise. The team structure outlined here provides a starting point, but should be adapted to your organization's specific context, resources, and constraints.

The key insight is that SpecOps requires a different team composition than traditional development or even traditional legacy modernization. The emphasis on AI-assisted specification generation, domain expert verification, and incremental modernization creates unique staffing needs.

Start with the core team structure, adapt it to your situation, invest in training and tool setup, and build team capability iteratively—just as you'll build specifications and modern implementations iteratively.

The team that successfully executes SpecOps modernization will develop valuable expertise that can be applied to future modernization efforts, making each subsequent project more efficient and effective.